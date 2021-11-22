"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = require("./server");
const index_1 = require("./routes/index");
const app = (0, express_1.default)();
// Body parsing Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Initiate Routes
(0, index_1.apiRoutes)(app);
(0, index_1.webRoutes)(app);
// Boot NodeJs Server
(0, server_1.bootServer)(app);
//# sourceMappingURL=index.js.map