import axios from 'axios';
import { goerli } from '../models/Chain';



export class TransactionService {

  static API_URL =  'https://eth-mainnet.g.alchemy.com/v2/Rq_FuRGfnHL9YID7xcML7Un7O8fkaeZb';
  static API_KEY =  'Rq_FuRGfnHL9YID7xcML7Un7O8fkaeZb';

  static async getTransactions(address: string) {
    const options = {
        method: 'GET',
        url: `${TransactionService.API_URL}/${address}`,
        params: {chain: goerli.name.toLowerCase()},
        headers: {accept: 'application/json', 'X-API-Key': TransactionService.API_KEY}
      };

    const response = await axios.request(options);
    return response;
  }

}