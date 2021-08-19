import axios from "axios";
import { coingecko } from "../config/general";

export class CoinService {
  async getAll(): Promise<any> {
    try {
      const response = await axios.get(`${coingecko.coins}/list`);
      return response?.data;
    } catch (error) {
      console.log(error?.message);
    }
  }

  async getById(coinId: string): Promise<any> {
    try {
      const response = await axios.get(`${coingecko.coins}/${coinId}`);
      return response?.data;
    } catch (error) {
      console.log(error?.message);
    }
  }
}
