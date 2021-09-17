import express from 'express';
import database from '../database';
import { Content } from '../../web/interfaces/content.interface';
import entityUtil from '../utils/entity.util';

const entityRouter = express.Router();

entityRouter.post('/', (req, res) => {
  const schema = req.body as Content;
  // extract the activated options values
  // save the entity schema
  // generate the model

  // parse the attributes
  const attributes = entityUtil.parseModelAttributes(schema);
  const entity = database.define(schema.modelName, attributes, { tableName: schema.tableName });

  return res.sendStatus(200);
});

export default entityRouter;
