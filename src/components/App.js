import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <h2>Hello {this.props.store.fullName}</h2>
    )
  }
}

export default App;
