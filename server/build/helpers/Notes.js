"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Notes {
    constructor(notes) {
        this.notes = notes;
    }
    static factory(notes) {
        return new Notes(notes.map((note) => {
            return Object.assign({}, note, { archive: false });
        }));
    }
    addNote(note) {
        if (!note.size) {
            note = Object.assign({}, note, { size: Notes.getNoteSize(note) });
        }
        this.notes.push(note);
        return note;
    }
    addToArchive(id) {
        if (this.notes.length > id) {
            this.notes[id].archive = true;
            return true;
        }
        else {
            return false;
        }
    }
    editNote(id, note) {
        if (this.notes.length > id) {
            this.notes[id] = note;
            return true;
        }
        else {
            return false;
        }
    }
    deleteNote(id) {
        if (this.notes.length > id) {
            this.notes.splice(id, 1);
            return true;
        }
        else {
            return false;
        }
    }
    toArray() {
        return [...this.notes];
    }
    map(callback) {
        return this.notes.map(callback);
    }
    filter(callback) {
        return this.notes.filter(callback);
    }
    static getNoteSize(note) {
        if (((note.items) && (note.items.length > 20)) ||
            ((note.attachments) && (note.attachments.length > 3)) ||
            ((note.text) && (note.text.length > 400))) {
            return 'l';
        }
        if (((note.items) && (note.items.length > 10)) ||
            ((note.attachments) && (note.attachments.length > 2)) ||
            ((note.text) && (note.text.length > 200))) {
            return 'm';
        }
        return 's';
    }
    *[Symbol.iterator]() {
        for (const note of this.notes) {
            yield note;
        }
    }
}
exports.default = Notes;
//# sourceMappingURL=Notes.js.map