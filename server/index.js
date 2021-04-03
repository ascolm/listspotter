"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// DEPENDENCIES
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
// SERVER CONFIG
const app = express_1.default();
const port = 3001;
const host = "127.0.0.1";
// MIDDLEWARES
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(morgan_1.default("dev"));
app.use(router_1.default);
// CONNECTION TO DB & LISTENING TO PORT
app.listen(port, host, () => {
    console.log(`Server running at ${host}:${port}! 🐯`);
});
