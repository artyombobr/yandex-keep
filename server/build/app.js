"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const notesRouters_1 = __importDefault(require("./routes/notesRouters"));
const colorsRouters_1 = __importDefault(require("./routes/colorsRouters"));
const tagsRouter_1 = __importDefault(require("./routes/tagsRouter"));
const app = express_1.default();
mongoose_1.default
    .connect('mongodb+srv://admin:5327853@cluster0-m0uoi.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
})
    .then(() => {
    console.log('DB connection open');
}, error => {
    console.error('DB connection error:', error);
});
app.use(express_fileupload_1.default());
app.use(body_parser_1.default.json());
app.use('/api/cards', notesRouters_1.default);
app.use('/api/colors', colorsRouters_1.default);
app.use('/api/tags', tagsRouter_1.default);
app.use(express_1.default.static(path_1.default.resolve('build')));
app.get('*', (req, res) => {
    res.sendFile(path_1.default.resolve('build', 'index.html'));
});
app.use((req, res) => {
    res.status(404);
    res.send(`<h1>Page not found</h1>`);
});
exports.default = app;
//# sourceMappingURL=app.js.map