"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cryptoData_routes_1 = __importDefault(require("./app/cryptoData/cryptoData.routes"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.use("/crypto", cryptoData_routes_1.default);
exports.default = router;
