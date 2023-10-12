import { Router } from "express";
import CryptoDataController from "./cryptoData.controller";

const userRouter = Router();

userRouter.get("/popular", CryptoDataController.fetchPopular);
userRouter.get("/latest", CryptoDataController.latestCrypto);
userRouter.get("/all", CryptoDataController.allCrypto);

export default userRouter;
