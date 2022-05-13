import React from 'react';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import Bid from '../../../app/bid';

interface Props {
    bids: Bid[];
}

export default function BidList({ bids }: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {bids.map(bid => (
                    <Item key={bid.id}>
                        <Item.Content>
                            <Item.Header as='a'>{bid.productId}</Item.Header>
                            <Item.Meta>{bid.id}</Item.Meta>
                            <Item.Description>
                                <div>{bid.sellerId}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button floated='right' content='View' color='blue' />
                                <Label basic content={bid.bidAmount}/>
                                </Item.Extra>

                        </Item.Content>
                     </Item>
                    ))}
            </Item.Group>
         </Segment>
   )
}