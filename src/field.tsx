import React from 'react'
import { observable, action, configure, computed } from 'mobx'
import { observer } from 'mobx-react'
import { FieldState } from 'formstate'

// export class FieldState {
//   @observable
//   value = ''

//   @action
//   onChange(newValue: string) {
//     this.value = newValue
//   }
// }

@observer
export class FieldInput extends React.Component<{ fieldState: FieldState<string> }>{
  render() {
    return (
      <input 
        style={{ border: '1px solid skyblue' }}
        value={this.props.fieldState.value}
        onChange={
          (e) => this.props.fieldState.onChange(e.target.value)
        }
      />
    )
  }
}