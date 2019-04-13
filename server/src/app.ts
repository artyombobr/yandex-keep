import express from 'express';
import mongoose from 'mongoose';
// import Notes from '../../frontend/src/Notes';
// import * as data from '../shri.json';
import notesRouter from './routes/notesRouters';

const app = express();
// const api = express.Router();

mongoose.connect("mongodb+srv://admin:5327853@cluster0-m0uoi.mongodb.net/test?retryWrites=true", {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500
}).then(() => {
  console.log('DB connection open');
}, error => {
  console.error('DB connection error:', error);
});

app.use('/api/cards', notesRouter);

app.use((req, res) => {
  res.status(404);
  res.send(`<h1>Page not found</h1>`);
});

app.use(express.static('dist'));

export default app;
