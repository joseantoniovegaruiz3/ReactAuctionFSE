import React from 'react';
import { Segment ,Form,Button} from 'semantic-ui-react';
import Bid from '../../../app/bid';

interface Props {

    bid: Bid | undefined;
    closeForm: () => void;
}

export default function BidForm({ bid, closeForm }:Props) {

    const initialState = bid ?? {
        id: '',
        productId: '',
        sellerId: '',
        bidAmount: ''
    }
    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Bid Amount' />
                <Button floated='right' positive type='submit' content='submit' />

                <Button onClick={ closeForm } floated= 'right' type='button' content='cancel' />
            </Form>
        </Segment>
        )
}