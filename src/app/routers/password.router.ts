import express from 'express';

const passwordRouter = express.Router();

passwordRouter.post('/forgot', (req, res) => {
  return res.sendStatus(200);
});

passwordRouter.post('/reset', (req, res) => {
  return res.sendStatus(200);
});

export default passwordRouter;
