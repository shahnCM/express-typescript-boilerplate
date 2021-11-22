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
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/users', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        return res.status(200).send({
            message: "WEB:Simple Call users Route from Here!",
            data: []
        });
    });
});
router.get('/posts', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        return res.status(200).send({
            message: "WEB:Simple Call posts Route from Here!",
            data: []
        });
    });
});
//Export All Routes
function routes(app) {
    app.use('/web', router);
}
exports.routes = routes;
//# sourceMappingURL=web.js.map