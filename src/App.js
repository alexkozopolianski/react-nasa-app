import React, { Component } from 'react';
import AstronomyContainer from './components/Container';
import Search from './components/Search';

const App = () => {
  return (
    <div>
   <Search />
    <AstronomyContainer />
    </div>
  )
}

export default App;