import React from 'react';
import axios from 'axios';
import {Header,List} from 'semantic-ui-react';
import {useState,useEffect} from 'react';
import { Container } from 'react-bootstrap';
import  { Component } from 'react';
import BidList from './BidList';
import NavBar from './NavBar';

function App() {
  const [bids, setBids]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5001/e-auction/api/v1/seller/show-bids/').then(response=>{
      console.log("prueba prueba");
    console.log(response);  
    setBids(response.data);
    })
  },[])


  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
       <ul>
        <BidList/>  
       </ul>
      </header>
    </div>
  );
}

export default App;
