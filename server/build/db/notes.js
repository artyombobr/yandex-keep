"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notes_1 = __importDefault(require("./models/notes"));
function getNotes() {
    return new Promise((resolve, reject) => {
        // @ts-ignore
        notes_1.default.getNotes()
            .then((notes) => {
            resolve(notes);
        })
            .catch((error) => {
            resolve({ error });
        });
    });
}
exports.default = getNotes;
//# sourceMappingURL=notes.js.map