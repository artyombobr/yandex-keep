"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const colorsControllers_1 = require("../controllers/colorsControllers");
const router = express_1.default.Router();
router.route('/').get(colorsControllers_1.getColors);
exports.default = router;
//# sourceMappingURL=colorsRouters.js.map