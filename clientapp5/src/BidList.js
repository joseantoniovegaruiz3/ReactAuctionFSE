
import React from 'react';
import { Table, Button } from 'react-bootstrap';

class BidList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      bids: []
    }
  }

  componentDidMount() {
  const apiUrl = 'http://auctionrestfse.azurewebsites.net/e-auction/api/v1/seller/show-bids/';

    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            bids: result
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

  render() {
    const { error, bids} = this.state;

    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return(
        <div>
          <h2>Bid List</h2>
          <Table>
            <thead>
              <tr>
                <th>#ID</th>
                <th>Product ID</th>
                <th>Bid Amount</th>
                <th>Seller ID</th>
                <th>Buyer ID</th>
              </tr>
            </thead>
            <tbody>
              {bids.map(bid => (
                <tr key={bid.id}>
                  <td>{bid.id}</td>
                  <td>{bid.productId}</td>
                  <td>{bid.bidAmount}</td>
                  <td>{bid.sellerId}</td>
                  <td>{bid.buyerId}</td>
                 
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )
    }
  }
}

export default BidList;