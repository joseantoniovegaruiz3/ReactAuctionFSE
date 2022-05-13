import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import  Bid  from '../../../app/bid';
import BidDetails from '../details/BidDetails';
import BidList from './BidList';


interface Props {
    bids: Bid[];
}

export default function BidDashBoard({ bids}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <BidList bids={ bids}/>
            </Grid.Column>
            <Grid.Column width='6'>
                {bids[0] &&
                    <BidDetails bid={bids[0]} />}
            </Grid.Column>
        </Grid>
    )
}