import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import  Bid  from '../../../app/bid';
import BidDetails from '../details/BidDetails';
import BidForm from '../form/BidForm';
import BidList from './BidList';


interface Props {
    bids: Bid[];
    selectedBid: Bid |undefined;
    selectBid: (id: string) => void;
    cancelSelectBid: () => void;
    editMode: boolean;
    openForm: (id: string)=>void;
    closeForm: () => void;
    createOrEdit: (bid: Bid) => void;
    deleteBid: (id: string) => void;
}

export default function BidDashBoard({ bids, selectedBid, selectBid, cancelSelectBid,
    editMode, openForm, closeForm, createOrEdit, deleteBid }: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <BidList bids={bids}
                         selectBid={selectBid}
                         deleteBid={deleteBid} />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedBid && !editMode &&
                    <BidDetails
                        bid={selectedBid}
                        cancelSelectBid={cancelSelectBid}
                        openForm={ openForm}
                    />}
                    
                {editMode &&
                    <BidForm closeForm={closeForm} bid={selectedBid} createOrEdit={createOrEdit} />
                    }
            </Grid.Column>
        </Grid>
    )
}