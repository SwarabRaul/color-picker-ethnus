import React from 'react';
import './App.css';
import ColorPicker from './ColorPicker';

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

function App() {
  return (
    <div className="App">
      <h1>Color Picker App</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
