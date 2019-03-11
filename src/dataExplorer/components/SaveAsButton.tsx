// Libraries
import React, {PureComponent} from 'react'

// Components
import SaveAsCellForm from 'src/dataExplorer/components/SaveAsCellForm'
import SaveAsTaskForm from 'src/dataExplorer/components/SaveAsTaskForm'
import SaveAsVariable from 'src/dataExplorer/components/SaveAsVariable'
import {IconFont, Button, ComponentColor} from '@influxdata/clockface'
import {Radio, Overlay} from 'src/clockface'

// Styles
import 'src/dataExplorer/components/SaveAsButton.scss'

enum SaveAsOption {
  Dashboard = 'dashboard',
  Task = 'task',
  Variable = 'variable',
}

interface Props {}

interface State {
  isOverlayVisible: boolean
  saveAsOption: SaveAsOption
}

class SaveAsButton extends PureComponent<Props, State> {
  public state: State = {
    isOverlayVisible: false,
    saveAsOption: SaveAsOption.Dashboard,
  }

  public render() {
    const {isOverlayVisible, saveAsOption} = this.state

    return (
      <>
        <Button
          icon={IconFont.Export}
          text="Save As"
          onClick={this.handleShowOverlay}
          color={ComponentColor.Primary}
          titleText="Save your query as a Dashboard Cell or a Task"
        />
        <Overlay visible={isOverlayVisible}>
          <Overlay.Container maxWidth={600}>
            <Overlay.Heading
              title="Save As"
              onDismiss={this.handleHideOverlay}
            />
            <Overlay.Body>
              <div className="save-as--options">
                <Radio>
                  <Radio.Button
                    active={saveAsOption === SaveAsOption.Dashboard}
                    value={SaveAsOption.Dashboard}
                    onClick={this.handleSetSaveAsOption}
                    data-testid="cell-radio-button"
                  >
                    Dashboard Cell
                  </Radio.Button>
                  <Radio.Button
                    active={saveAsOption === SaveAsOption.Task}
                    value={SaveAsOption.Task}
                    onClick={this.handleSetSaveAsOption}
                    data-testid="task-radio-button"
                  >
                    Task
                  </Radio.Button>
                  <Radio.Button
                    active={saveAsOption === SaveAsOption.Variable}
                    value={SaveAsOption.Variable}
                    onClick={this.handleSetSaveAsOption}
                    data-testid="variable-radio-button"
                  >
                    Variable
                  </Radio.Button>
                </Radio>
              </div>
              {this.saveAsForm}
            </Overlay.Body>
          </Overlay.Container>
        </Overlay>
      </>
    )
  }

  private get saveAsForm(): JSX.Element {
    const {saveAsOption} = this.state

    if (saveAsOption === SaveAsOption.Dashboard) {
      return <SaveAsCellForm dismiss={this.handleHideOverlay} />
    } else if (saveAsOption === SaveAsOption.Task) {
      return <SaveAsTaskForm dismiss={this.handleHideOverlay} />
    } else if (saveAsOption === SaveAsOption.Variable) {
      return <SaveAsVariable onHideOverlay={this.handleHideOverlay} />
    }
  }

  private handleShowOverlay = () => {
    this.setState({isOverlayVisible: true})
  }

  private handleHideOverlay = () => {
    this.setState({isOverlayVisible: false})
  }

  private handleSetSaveAsOption = (saveAsOption: SaveAsOption) => {
    this.setState({saveAsOption})
  }
}

export default SaveAsButton
