import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import NavBar from './NavBar';
import Bid from './app/bid';


function App() {
    const [bids, setBids] = useState < Bid[]>([]);
  useEffect(()=>{
      axios.get<Bid[]>('https://auctionrestfse.azurewebsites.net/e-auction/api/v1/seller/show-bids/').then(response=>{
    
    console.log(response);  
    setBids(response.data);
    })
  },[])

  return (
      <div >

          <NavBar />
          <List>
              {bids.map(bid => (
                  <List.Item key={bid.id}>
                      {bid.id}
                  </List.Item>
              ))}
          </List>

    </div>
  );
}

export default App;
