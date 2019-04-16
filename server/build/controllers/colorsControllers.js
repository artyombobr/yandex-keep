"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Colors_1 = __importDefault(require("../helpers/Colors"));
const shri_json_1 = __importDefault(require("../shri.json"));
const colors = Colors_1.default.factory(shri_json_1.default.colors);
exports.getColors = (req, res) => {
    res.status(200).json(colors.toArray());
};
//# sourceMappingURL=colorsControllers.js.map