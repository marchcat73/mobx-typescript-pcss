import React from 'react'
import { observer } from 'mobx-react'

import { appState } from './appState'
import { FieldInput } from './field'

@observer
class Form extends React.Component<{}> {
  render() {
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          appState.addCurrentItem();
        }}>
          <FieldInput fieldState={appState.currentItem} />
          <button type="submit">
            Add
          </button>
          <button type="button" onClick={() => appState.reset()}>
            Reset
          </button>
          <ul>
            {appState.items.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              );
            })}
          </ul>
        </form>
      </div>
    )
  }
}

export default Form