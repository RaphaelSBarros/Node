"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
let nome = 'Raphael';
if (validator_1.default.isLowercase(nome)) {
    console.log(`A string ${nome} é toda minúscula`);
}
else {
    console.log(`A string ${nome} NÃO é toda minúscula`);
}
