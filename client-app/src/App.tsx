import React, { Fragment, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import NavBar from './NavBar';
import Bid from './app/bid';
import BidDashBoard from './features/bids/dashboard/BidDashboard';


function App() {
    const [bids, setBids] = useState < Bid[]>([]);
  useEffect(()=>{
      axios.get<Bid[]>('https://auctionrestfse.azurewebsites.net/e-auction/api/v1/seller/show-bids/').then(response=>{
    
    console.log(response);  
    setBids(response.data);
    })
  },[])

    return (
        <Fragment >

          <NavBar />
          <Container style={{marginTop: '7em'}} >
                <BidDashBoard bids={bids} />
       
           </Container >


        </Fragment>
  );
}

export default App;
