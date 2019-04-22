import {Request, Response} from 'express';
import Tags from '../helpers/Tags';
import data from '../shri.json';

const tags = Tags.factory(data.tags);

export const getTags = (req: Request, res: Response) => {
  res.status(200).json(tags.toArray());
};
