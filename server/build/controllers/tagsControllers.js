"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tags_1 = __importDefault(require("../helpers/Tags"));
const shri_json_1 = __importDefault(require("../shri.json"));
const tags = Tags_1.default.factory(shri_json_1.default.tags);
exports.getTags = (req, res) => {
    res.status(200).json(tags.toArray());
};
//# sourceMappingURL=tagsControllers.js.map
