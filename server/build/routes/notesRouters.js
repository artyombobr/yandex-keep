"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notesControllers_1 = require("../controllers/notesControllers");
const router = express_1.default.Router();
router
    .route('/')
    .get(notesControllers_1.getNotes)
    .post(notesControllers_1.addNote);
router
    .route('/:id')
    .delete(notesControllers_1.deleteNote)
    .patch(notesControllers_1.editNote);
router.route('/archive').get(notesControllers_1.getArchive);
router.route('/archive/:id').post(notesControllers_1.addToArchive);
exports.default = router;
//# sourceMappingURL=notesRouters.js.map