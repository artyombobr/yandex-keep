import express, { response } from 'express';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';
import path from 'path';
import notesRouter from './routes/notesRouters';
import colorsRouter from './routes/colorsRouters';
import tagsRouter from './routes/tagsRouter';

const app = express();

mongoose
  .connect(
    'mongodb+srv://admin:5327853@cluster0-m0uoi.mongodb.net/test?retryWrites=true',
    {
      useNewUrlParser: true,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 500,
    }
  )
  .then(
    () => {
      console.log('DB connection open');
    },
    error => {
      console.error('DB connection error:', error);
    }
  );

app.use(fileUpload());
app.use(bodyParser.json());
app.use('/api/cards', notesRouter);
app.use('/api/colors', colorsRouter);
app.use('/api/tags', tagsRouter);

app.use(express.static(path.resolve('build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve('build', 'index.html'));
});

app.use((req, res) => {
  res.status(404);
  res.send(`<h1>Page not found</h1>`);
});

export default app;
