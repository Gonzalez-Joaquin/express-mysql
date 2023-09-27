"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 7777;
app.get('/', (_req, res) => {
    res.send('Hola putito');
});
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
