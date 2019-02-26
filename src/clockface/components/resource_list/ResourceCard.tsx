// Libraries
import React, {PureComponent} from 'react'
import {Link} from 'react-router'
import moment from 'moment'

// Types
import {Organization} from 'src/types/v2'

// Constants
import {UPDATED_AT_TIME_FORMAT} from 'src/dashboards/constants'

interface PassedProps {
  name: () => JSX.Element
  description?: () => JSX.Element
  updatedAt?: string
  owner?: Organization
  labels?: () => JSX.Element
  metaData?: () => JSX.Element[]
  contextMenu?: () => JSX.Element
  children?: JSX.Element[] | JSX.Element
}

interface DefaultProps {
  testID?: string
}

type Props = PassedProps & DefaultProps

export default class ResourceListCard extends PureComponent<Props> {
  public static defaultProps: DefaultProps = {
    testID: 'resource-card',
  }

  public render() {
    const {description, children, testID, labels} = this.props

    return (
      <div className="resource-list--card" data-testid={testID}>
        {this.nameAndMeta}
        {description()}
        {labels()}
        {children}
        {this.contextMenu}
      </div>
    )
  }

  private get nameAndMeta(): JSX.Element {
    const {name} = this.props

    return (
      <div className="resource-list--name-meta">
        {name()}
        {this.formattedMetaData}
      </div>
    )
  }

  private get formattedMetaData(): JSX.Element {
    const {updatedAt, owner, metaData} = this.props

    if (!updatedAt && !owner && !metaData) {
      return null
    }

    return (
      <div className="resource-list--meta">
        {this.ownerLink}
        {this.updated}
        {this.metaData}
      </div>
    )
  }

  private get updated(): JSX.Element {
    const {updatedAt} = this.props

    if (updatedAt) {
      const relativeTimestamp = moment(updatedAt).fromNow()
      const absoluteTimestamp = moment(updatedAt).format(UPDATED_AT_TIME_FORMAT)

      return (
        <div className="resource-list--meta-item" title={absoluteTimestamp}>
          {`Modified ${relativeTimestamp}`}
        </div>
      )
    }
  }

  private get ownerLink(): JSX.Element {
    const {owner} = this.props

    if (owner) {
      return (
        <div className="resource-list--meta-item">
          <Link
            to={`/organizations/${owner.id}/members_tab`}
            className="resource-list--owner"
          >
            {owner.name}
          </Link>
        </div>
      )
    }
  }

  private get metaData(): JSX.Element[] {
    const {metaData} = this.props

    if (metaData) {
      return React.Children.map(metaData(), (m: JSX.Element) => {
        if (m !== null && m !== undefined) {
          return <div className="resource-list--meta-item">{m}</div>
        }
      })
    }
  }

  private get contextMenu(): JSX.Element {
    const {contextMenu} = this.props

    if (contextMenu) {
      return <div className="resource-list--context-menu">{contextMenu()}</div>
    }
  }
}
