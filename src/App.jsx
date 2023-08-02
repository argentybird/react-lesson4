import React from 'react';
import FunctionalComponent from './components/FunctionalComponent';
import FuncComplex from './components/FuncComplex';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <FuncComplex />
        <FunctionalComponent min={1} max={10}/>
      </div>
    );
  }
}
