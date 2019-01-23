// Utils
import {queryAPI} from 'src/utils/api'
import {getMinDurationFromAST} from 'src/shared/utils/getMinDurationFromAST'

// Constants
import {DEFAULT_DURATION_MS, WINDOW_PERIOD} from 'src/shared/constants'

// Types
import {InfluxLanguage} from 'src/types/v2/dashboards'

const DESIRED_POINTS_PER_GRAPH = 360
const FALLBACK_WINDOW_PERIOD = 15000

export async function renderQuery(
  query: string,
  type: InfluxLanguage,
  variables: {[name: string]: string}
): Promise<string> {
  if (type === InfluxLanguage.InfluxQL) {
    // We don't support template variables / macros in InfluxQL yet, so this is
    // a no-op
    return query
  }

  const {imports, body} = await extractImports(query)
  let variableDelcarations = formatVariables(variables, query)

  if (query.includes(WINDOW_PERIOD)) {
    const ast = await getAST(`${variableDelcarations}\n\n${query}`)

    let windowPeriod: number

    try {
      windowPeriod = getWindowInterval(getMinDurationFromAST(ast))
    } catch {
      windowPeriod = FALLBACK_WINDOW_PERIOD
    }

    variableDelcarations += `\n${WINDOW_PERIOD} = ${windowPeriod}ms`
  }

  return `${imports}\n\n${variableDelcarations}\n\n${body}`
}

async function extractImports(
  query: string
): Promise<{imports: string; body: string}> {
  const ast = await getAST(query)
  const {imports = [], body = []} = ast.files[0]
  const importStatements = imports.map(i => i.location.source).join('\n')
  const bodyStatements = body.map(b => b.location.source).join('\n')
  return {imports: importStatements, body: bodyStatements}
}

function formatVariables(
  variables: {[name: string]: string},
  query: string
): string {
  return Object.entries(variables)
    .filter(([key]) => query.includes(key))
    .map(([key, value]) => `${key} = ${value}`)
    .join('\n')
}

async function getAST(query: string): Promise<object> {
  const {data} = await queryAPI.queryAstPost(undefined, undefined, {query})

  return data.ast
}

function getWindowInterval(durationMilliseconds: number = DEFAULT_DURATION_MS) {
  return Math.round(durationMilliseconds / DESIRED_POINTS_PER_GRAPH)
}
