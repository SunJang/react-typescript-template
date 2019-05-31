import React from 'react';
import Routes from './Routes';
import { Normalize } from 'styled-normalize';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes />
      <Normalize />
    </div>
  );
};

export default App;
