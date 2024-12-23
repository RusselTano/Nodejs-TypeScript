"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = require("path");
const PORT = 3000;
const app = (0, express_1.default)();
app.use((req, res, next) => {
    console.log(req.url);
    next();
});
app.use(express_1.default.static((0, path_1.join)(__dirname, 'public')));
app.get('*', (req, res) => {
    res.sendFile((0, path_1.join)(__dirname, 'public/index.html'));
});
app.listen(PORT, () => {
    console.log(`listening on port ${PORT} you can open your browser on http://localhost:${PORT}`);
});
console.log('uppp');
//# sourceMappingURL=server.js.map