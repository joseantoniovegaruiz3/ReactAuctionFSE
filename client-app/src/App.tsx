import React, { Fragment, useEffect, useState } from 'react';

import './App.css';
import axios from 'axios';
import { Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import Bid from './app/bid';
import BidDashBoard from './features/bids/dashboard/BidDashboard';

import { v4 as uuid } from 'uuid';




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

    function handleCreateOrEditBid(bid: Bid) {
        bid.id ? setBids([...bids.filter(x => x.id !== bid.id), bid])
            : setBids([...bids, {...bid,id:uuid()}]);
        setEditMode(false);
        setSelectedBid(bid);


    }

    function handleDeleteBid(id: string) {
        setBids([...bids.filter(x=>x.id !==id)])
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
                    createOrEdit={handleCreateOrEditBid}
                    deleteBid={handleDeleteBid}
                />
       
           </Container >


        </Fragment>
  );
}

export default App;
