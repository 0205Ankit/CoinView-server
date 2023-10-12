import { Request, Response } from "express";
import fetchApi from "../../helper/fetchApi";

export default class CryptoDataController {
  static async fetchPopular(req: Request, res: Response) {
    const { success, data } = await fetchApi({
      query: `v1/cryptocurrency/listings/latest?start=${
        req.query.start
      }&limit=${req.query.limit}${
        req.query.sort ? `&sort=${req.query.sort}` : ""
      }`,
      type: "GET",
    });

    if (success) {
      res.send({
        success: true,
        info: data,
      });
    } else {
      res.send({
        success: false,
        info: data,
      });
    }
  }

  static async allCrypto(req: Request, res: Response) {
    const { success, data } = await fetchApi({
      query: `v1/cryptocurrency/listings/latest`,
      type: "GET",
    });

    if (success) {
      res.send({
        success: true,
        info: data,
      });
    } else {
      res.send({
        success: false,
        info: data,
      });
    }
  }

  static async latestCrypto(req: Request, res: Response) {
    const { success, data } = await fetchApi({
      query: `v1/cryptocurrency/listings/latest?limit=${req.query.limit}&sort=date_added`,
      type: "GET",
    });

    if (success) {
      res.send({
        success: true,
        info: data,
      });
    } else {
      res.send({
        success: false,
        info: data,
      });
    }
  }
}
