"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const schemaOptions = {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
};
const NotesSchema = new Schema({
    type: {
        type: String,
        default: 'text'
    },
    title: {
        type: String
    },
    text: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
}, schemaOptions);
NotesSchema.statics = {
    getNotes() {
        return this;
    }
};
const NotesModel = mongoose_1.default.model('Notes', NotesSchema);
exports.default = NotesModel;
//# sourceMappingURL=notes.js.map