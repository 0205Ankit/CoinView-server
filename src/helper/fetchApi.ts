import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

type ParamType = {
  query: string;
  type: string;
};

const fetchApi = async ({ query, type }: ParamType) => {
  if (type === "GET") {
    try {
      const response = await axios.get(
        `https://pro-api.coinmarketcap.com/${query}`,
        {
          headers: {
            "X-CMC_PRO_API_KEY": process.env.API_KEY,
          },
        }
      );
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        data: error,
      };
    }
  }
};

export default fetchApi;
