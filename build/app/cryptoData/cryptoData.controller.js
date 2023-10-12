"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetchApi_1 = __importDefault(require("../../helper/fetchApi"));
class CryptoDataController {
    static fetchPopular(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { success, data } = yield (0, fetchApi_1.default)({
                query: `v1/cryptocurrency/listings/latest?start=${req.query.start}&limit=${req.query.limit}${req.query.sort ? `&sort=${req.query.sort}` : ""}`,
                type: "GET",
            });
            if (success) {
                res.send({
                    success: true,
                    info: data,
                });
            }
            else {
                res.send({
                    success: false,
                    info: data,
                });
            }
        });
    }
    static allCrypto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { success, data } = yield (0, fetchApi_1.default)({
                query: `v1/cryptocurrency/listings/latest`,
                type: "GET",
            });
            if (success) {
                res.send({
                    success: true,
                    info: data,
                });
            }
            else {
                res.send({
                    success: false,
                    info: data,
                });
            }
        });
    }
    static latestCrypto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { success, data } = yield (0, fetchApi_1.default)({
                query: `v1/cryptocurrency/listings/latest?limit=${req.query.limit}&sort=date_added`,
                type: "GET",
            });
            if (success) {
                res.send({
                    success: true,
                    info: data,
                });
            }
            else {
                res.send({
                    success: false,
                    info: data,
                });
            }
        });
    }
}
exports.default = CryptoDataController;
