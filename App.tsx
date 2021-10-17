import React from 'react';
import { StatusBar } from 'react-native';

import Home from './src/pages/Home';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#f10074" barStyle="light-content" />
      <Home />
    </>
  );
};

export default App;
