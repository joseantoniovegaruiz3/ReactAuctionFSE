import React, { Fragment, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import NavBar from './NavBar';
import Bid from './app/bid';
import BidDashBoard from './features/bids/dashboard/BidDashboard';


function App() {
    const [bids, setBids] = useState<Bid[] >([]);
    const [selectedBid, setSelectedBid] = useState<Bid | undefined>(undefined);
    const [editMode, setEditMode] = useState(false);

  useEffect(()=>{
      axios.get<Bid[]>('https://auctionrestfse.azurewebsites.net/e-auction/api/v1/seller/show-bids').then(response=>{
    
    console.log(response);  
    setBids(response.data);
    })
  },[])

    function handleSelectedBid(id: string) {
        setSelectedBid(bids.find(x => x.id === id));
    }

    function handleCancelSelectedBid() {
        setSelectedBid(undefined);

    }

    function handleFormOpen(id?: string) {
        id ? handleSelectedBid(id) : handleCancelSelectedBid();
        setEditMode(true);
     }

    function handleFormClose() {
        setEditMode(false);
    }


    return (
        <Fragment >

            <NavBar openForm={ handleFormOpen}/>
          <Container style={{marginTop: '7em'}} >
                <BidDashBoard
                    bids={bids}
                    selectedBid={selectedBid}
                    selectBid={handleSelectedBid}
                    cancelSelectBid={handleCancelSelectedBid}
                    editMode={editMode}
                    openForm={handleFormOpen}
                    closeForm={handleFormClose}
                />
       
           </Container >


        </Fragment>
  );
}

export default App;
