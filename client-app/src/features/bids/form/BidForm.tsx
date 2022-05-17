import React, { ChangeEvent, useState } from 'react';
import { Segment ,Form,Button} from 'semantic-ui-react';
import Bid from '../../../app/bid';

interface Props {

    bid: Bid | undefined;
    closeForm: () => void;
    createOrEdit: (bid:Bid) => void;
}



export default function BidForm({ bid: selectedBid, closeForm, createOrEdit }: Props) {

    const initialState = selectedBid ?? {
        id: '',
        productId: '',
        sellerId: '',
        bidAmount: ''
    }

    const [bid, setBid] = useState(initialState);

    function handleSubmit() {
        createOrEdit(bid);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setBid({...bid,[name]: value})

    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='productId' value={bid.productId} name='productId' onChange={handleInputChange} />
                <Form.Input placeholder='sellerId' value={bid.sellerId} name='sellerId' onChange={handleInputChange} />

                <Form.Input placeholder='bidAmount' value={bid.bidAmount} name='bidAmount' onChange={handleInputChange} />
                <Button floated='right' positive type='submit' content='submit' />

                <Button onClick={ closeForm } floated= 'right' type='button' content='cancel' />
            </Form>
        </Segment>
        )
}