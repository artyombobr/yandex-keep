import { Request, Response } from 'express';
import Colors from '../helpers/Colors';
import Notes from '../helpers/Notes';
import data from '../shri.json';

const notes = Notes.factory(data.notes);
const colors = Colors.factory(data.colors);

export const getNotes = (req: Request, res: Response) => {
  let { color } = req.query;
  color = Number(color);
  if (color) {
    if (colors.checkColor(color)) {
      res
        .status(200)
        .json(
          notes.filter(note => note.color === color && note.archive === false)
        );
    } else {
      res.status(400).json('Incorrect color');
    }
  } else {
    res.status(200).json(notes.filter(note => note.archive === false));
  }
};

export const getArchive = (req: Request, res: Response) => {
  res.status(200).json(notes.filter(note => note.archive === true));
};

export const addToArchive = (req: Request, res: Response) => {
  const { id } = req.params;
  const result = notes.addToArchive(id);
  if (result) {
    res.status(200).json('success');
  } else {
    res.status(400).json({ status: 'fail' });
  }
};

export const addNote = (req: Request, res: Response) => {
  const note = req.body;
  if (note) {
    notes.addNote(note);
    res.status(200).json({ status: 'success', note });
  } else {
    res.status(400).json({ status: 'fail' });
  }
};

export const editNote = (req: Request, res: Response) => {
  const { id } = req.params;
  const { note } = req.body;
  const result = notes.editNote(Number(id), note);
  if (result) {
    res.status(200).json('success');
  } else {
    res.status(400).json({ status: 'fail' });
  }
};

export const deleteNote = (req: Request, res: Response) => {
  const { id } = req.params;
  const result = notes.deleteNote(Number(id));
  if (result) {
    res.status(200).json('success');
  } else {
    res.status(400).json({ status: 'fail' });
  }
};

export const getNoteById = (req: Request, res: Response) => {
  const { id } = req.query;
  res.status(200).json({ id });
};

export const uploadImage = (req: Request, res: Response) => {
  if (req.files) {
    console.log(req.files);
  }
  res.status(200).json({ status: 'good' });
};
