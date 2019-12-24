import React from 'react';
import { observable, action, configure, computed } from 'mobx';
import { observer } from 'mobx-react';

import './App.css';

/** Writing asynchronous actions */
configure({
  enforceActions: "observed" // don't allow state modifications outside actions
})

class HelloData {
  @observable clickedCount = 0;

  @action
  increment() {
    this.clickedCount++;
  }

  @computed
  get hasBeenClicked() {
    console.log('called');
    return this.clickedCount > 0;
  }
}

@observer
class App extends React.Component<{}> {
  data = new HelloData();
  render() {
    return (
      <>
        <div className="header">
          <button onClick={() => this.data.increment()} className="Button">
            Click count = {this.data.clickedCount}
          </button>
        </div>
        {
          this.data.hasBeenClicked
          && <div>You have clicked the button!</div>
        }
      </>
    );
  }
}

export default App;
