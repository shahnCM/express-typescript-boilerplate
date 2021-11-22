"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootServer = void 0;
const port = '9000';
function bootServer(app) {
    try {
        app.listen(port, () => {
            console.log(`Connected successfully on port ${port}`);
        });
    }
    catch (error) {
        console.error(`Error occured: ${error.message}`);
    }
}
exports.bootServer = bootServer;
//# sourceMappingURL=server.js.map