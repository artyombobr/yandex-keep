import Notes from '../../server/src/helpers/Notes';

const NOTE = {
  id: 0,
  type: 'text',
  title: 'Не забыть выгулять Сиба-Ину',
  color: 3,
  created: 1520160803000,
};

describe('Notes', () => {
  let notes: Notes;

  beforeEach(() => {
    notes = Notes.factory([NOTE]);
  });
  describe('toArray', () => {
    test('should return array', () => {
      const array = notes.toArray();
      expect(array).toBeInstanceOf(Array);
      expect(array).toHaveLength(1);
      expect(array).toEqual([{ ...NOTE, archive: false }]);
    });
  });
  describe('addNote', () => {
    test('should add note', () => {
      notes.addNote(NOTE);
      const array = notes.toArray();
      expect(array).toBeInstanceOf(Array);
      expect(array).toHaveLength(2);
    });
  });

  describe('toArray', () => {
    test('should set to archive', () => {
      notes.addNote(NOTE);
      notes.addToArchive(1);
      const array = notes.toArray();
      expect(array).toBeInstanceOf(Array);
      expect(array[0].archive).toBe(true);
    });
  });

  describe('deleteNote', () => {
    test('should to delete note', () => {
      notes.addNote(NOTE);
      notes.deleteNote(1);
      const array = notes.toArray();
      expect(array).toBeInstanceOf(Array);
      expect(array).toHaveLength(1);
    });
  });

  describe('map', () => {
    test('should return array', () => {
      const newArray = notes.map(note => {
        // eslint-disable-next-line no-param-reassign
        note.color = 2;
        return note;
      });
      expect(newArray[0].color).toBe(2);
    });
  });

  describe('filter', () => {
    test('should return array', () => {
      const newArray = notes.filter(note => note.type === 'text');
      expect(newArray).toBeInstanceOf(Array);
      expect(newArray).toHaveLength(1);
      expect(newArray[0].type).toBe('text');
    });
  });

  describe('Symbol.iterator', () => {
    test('should be iterable', () => {
      notes.addNote(NOTE);
      for (const note of notes) {
        expect(note).toBeInstanceOf(Object);
      }
    });
  });

  describe('getNoteSize', () => {
    test('should have size', () => {
      notes.addNote(NOTE);
      const array = notes.toArray();
      expect(array[0].size).toBe('s');
    });
  });
});
