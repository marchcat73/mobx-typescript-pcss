import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import './App.pcss';

class HelloData {
  @observable clickedCount = 0;

  @action
  increment() {
    this.clickedCount++;
  }
}

@observer
class App extends React.Component<{}> {
  data = new HelloData();
  render() {
    return (
      <div className="header">
        <button onClick={() => this.data.increment()} className="Button">
          Click count = {this.data.clickedCount}
        </button>
      </div>
    );
  }
}

export default App;
