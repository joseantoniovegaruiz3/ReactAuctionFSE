import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import NavBar from './NavBar';


function App() {
  const [bids, setBids]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5001/e-auction/api/v1/seller/show-bids/').then(response=>{
    
    console.log(response);  
    setBids(response.data);
    })
  },[])

  return (
    <div >
     <NavBar/>
    </div>
  );
}

export default App;
