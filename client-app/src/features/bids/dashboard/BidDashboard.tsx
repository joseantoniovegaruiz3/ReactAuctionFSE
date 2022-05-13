import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import  Bid  from '../../../app/bid';
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
        </Grid>
    )
}