import React from 'react';
import './App.css';
import Loading from './components/loading/Loading';


const App=()=> {

  function play(){
    return(
      <Loading></Loading>
    )
  };

  return (
    <div className="App">
      <header>
        <button onClick={play}>je m;appel david</button>
      </header>
        
      
    </div>
  );
}

export default App;
