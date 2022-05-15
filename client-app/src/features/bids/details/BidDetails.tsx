import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import Bid from '../../../app/bid';


interface Props {
	bid: Bid;
	cancelSelectBid: () => void;
	openForm: (id: string)=>void;

}

export default function BidDetails({ bid, cancelSelectBid ,openForm}: Props) {
	return (
		<Card fluid>

			<Card.Content>
				<Card.Header>{ bid.productId}</Card.Header>
				
				<Card.Description>
					{ bid.sellerId }
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<Button.Group widths='2'>
					<Button onClick={()=>openForm(bid.id) } basic color='blue' content='Edit' />
					<Button onClick={cancelSelectBid} basic color='grey' content='Cancel' />

				</Button.Group>
			</Card.Content>
		</Card>
	)
}