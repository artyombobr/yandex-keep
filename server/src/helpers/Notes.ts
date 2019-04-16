import { NotesEntity } from '../shared';

class Notes {
  private readonly notes: NotesEntity[];

  private constructor(notes: NotesEntity[]) {
    this.notes = notes;
  }

  public static factory(notes: NotesEntity[]) {
    return new Notes(
      notes.map(note => {
        return {
          ...note,
          archive: false,
        };
      })
    );
  }

  public addNote(note: NotesEntity) {
    if (!note.size) {
      note = { ...note, size: Notes.getNoteSize(note) };
    }
    note = {
      ...note,
      id: this.notes.length,
      created: Date.now(),
      archive: false,
    };
    this.notes.unshift(note);
    return note;
  }

  public addToArchive(id: number): boolean {
    if (this.notes.length > id) {
      const index = this.notes.findIndex(note => note.id === Number(id));
      this.notes[index].archive = true;
      return true;
    }
    return false;
  }

  public editNote(id: number, note: NotesEntity): boolean {
    if (this.notes.length > id) {
      this.notes[id] = note;
      return true;
    }
    return false;
  }

  public deleteNote(id: number): boolean {
    if (this.notes.length > id) {
      this.notes.splice(id, 1);
      return true;
    }
    return false;
  }

  public toArray(): NotesEntity[] {
    return [...this.notes];
  }

  public map<T>(
    callback: (item: NotesEntity, index: number, array: NotesEntity[]) => T
  ): T[] {
    return this.notes.map(callback);
  }

  public filter(callback: (item: NotesEntity) => boolean) {
    return this.notes.filter(callback);
  }

  private static getNoteSize(note: NotesEntity) {
    if (
      (note.items && note.items.length > 20) ||
      (note.attachments && note.attachments.length > 3) ||
      (note.text && note.text.length > 400)
    ) {
      return 'l';
    }
    if (
      (note.items && note.items.length > 10) ||
      (note.attachments && note.attachments.length > 2) ||
      (note.text && note.text.length > 200)
    ) {
      return 'm';
    }
    return 's';
  }

  public *[Symbol.iterator]() {
    for (const note of this.notes) {
      yield note;
    }
  }
}

export default Notes;
