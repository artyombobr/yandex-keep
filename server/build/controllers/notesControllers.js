"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Colors_1 = __importDefault(require("../helpers/Colors"));
const Notes_1 = __importDefault(require("../helpers/Notes"));
const shri_json_1 = __importDefault(require("./../shri.json"));
const notes = Notes_1.default.factory(shri_json_1.default.notes);
const colors = Colors_1.default.factory(shri_json_1.default.colors);
exports.getNotes = (req, res) => {
    let { color } = req.query;
    color = Number(color);
    if (color) {
        if (colors.checkColor(color)) {
            res.status(200).json(notes.filter((note) => ((note.color === color) && (note.archive === false))));
        }
        else {
            res.status(400).json('Incorrect color');
        }
    }
    else {
        res.status(200).json(notes.filter((note) => note.archive === false));
    }
};
exports.getArchive = (req, res) => {
    res.status(200).json(notes.filter((note) => note.archive === true));
};
exports.addToArchive = (req, res) => {
    const { id } = req.params;
    const result = notes.addToArchive(id);
    if (result) {
        res.status(200).json('success');
    }
    else {
        res.status(400).json({ status: 'fail' });
    }
};
exports.addNote = (req, res) => {
    const { note } = req.query;
    if (note) {
        const newNote = notes.addNote(note);
        res.status(200).json({ status: 'success', note: newNote });
    }
    else {
        res.status(400).json({ status: 'fail' });
    }
};
exports.editNote = (req, res) => {
    const { id } = req.params;
    const { note } = req.body;
    const result = notes.editNote(Number(id), note);
    if (result) {
        res.status(200).json('success');
    }
    else {
        res.status(400).json({ status: 'fail' });
    }
};
exports.deleteNote = (req, res) => {
    const { id } = req.params;
    const result = notes.deleteNote(Number(id));
    if (result) {
        res.status(200).json('success');
    }
    else {
        res.status(400).json({ status: 'fail' });
    }
};
exports.getNoteById = (req, res) => {
    const { id } = req.query;
    res.status(200).json({ id });
};
//# sourceMappingURL=notesControllers.js.map