import {Request, Response} from 'express';
import Colors from '../helpers/Colors';
import data from './../shri.json';

const colors = Colors.factory(data.colors);

export const getColors = (req: Request, res: Response) => {
  res.status(200).json(colors.toArray());
};
