import React, { Component } from 'react';
import './App.css';
import Loading from './components/loading/Loading';


class App extends Component{

 affiche=()=> {
  return(
    <div>
      <Loading div={'stam'}/>
    </div>
  )
  }
render() {
  return (
    <div className="App">
      <header className='stam'>
        <button  onClick={this.affiche} >je m'appel david</button>
      </header>
    </div>
  );
}
};
export default App

