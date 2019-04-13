import NotesModel from './models/notes';

function getNotes() {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    NotesModel.getNotes()
      .then((notes: any) => {
        resolve(notes);
      })
      .catch((error: any) => {
        resolve({error});
      })
  });
}

export default getNotes;
