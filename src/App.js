import React from 'react';
import Tetris from './components/tetris';
import Create from './components/create';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Tetris />
        <Create />
      </div>
    );
  }
}

export default App;