import express, { Router } from 'express';
import {
  addNote,
  addToArchive,
  deleteNote,
  editNote,
  getArchive,
  getNotes,
  uploadImage,
} from '../controllers/notesControllers';

const router: Router = express.Router();

router
  .route('/')
  .get(getNotes)
  .post(addNote);
router
  .route('/:id')
  .delete(deleteNote)
  .patch(editNote);
router.route('/archive').get(getArchive);
router.route('/archive/:id').post(addToArchive);
router.route('/upload').post(uploadImage);

export default router;
