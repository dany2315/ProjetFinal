import React, { useEffect, useState } from 'react'
import './App.css';
import Loading from './components/loading/Loading';


function App (){
 
  const [statConnect,setStateConnect]= useState(false)

  useEffect(()=>{
    console.log(statConnect)

  
  })


return (
      <>
{statConnect ? 
<header><div className='acc'>accueil</div></header> 
: <Loading/>}



      
      
      
     
      </>
    )
}

export default App




