import React, { Component } from 'react';
import './App.css';
import Update from './components/Update';
import View from './components/View';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       entries: []
    }
  }
  updateEntries = entries => {
    this.setState({ entries })
  }
  render() {

    const {entries} = this.state;

    return (
      <div id='outer-container'>
        <Update updateEntries={this.updateEntries}/>
        <View entries={entries}/>
      </div>
    );
  }
}

export default App;
