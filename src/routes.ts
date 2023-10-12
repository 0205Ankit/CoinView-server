import cryptoDataRouter from "./app/cryptoData/cryptoData.routes";
import { Router } from "express";

const router = Router();

router.use("/crypto", cryptoDataRouter);

export default router;
