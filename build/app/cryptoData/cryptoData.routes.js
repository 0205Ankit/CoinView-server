"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cryptoData_controller_1 = __importDefault(require("./cryptoData.controller"));
const userRouter = (0, express_1.Router)();
userRouter.get("/popular", cryptoData_controller_1.default.fetchPopular);
userRouter.get("/latest", cryptoData_controller_1.default.latestCrypto);
userRouter.get("/all", cryptoData_controller_1.default.allCrypto);
exports.default = userRouter;
