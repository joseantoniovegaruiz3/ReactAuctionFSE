import axios, { AxiosResponse } from 'axios';
/*axios.defaults.baseURL = 'https://auctionrestfse.azurewebsites.net'*/

axios.defaults.baseURL = 'https://localhost:5000'


const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url).then(responseBody),
    put: (url: string, body:{}) => axios.put(url).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody),
}

const Bids = {
    list: () => requests.get('/e-auction/api/v1/seller/show-bids/')

}

const agent = {
        Bids
}
export default agent;