import path from 'path';
import express from 'express';

const appRouter = express.Router();

appRouter.get('*', (req, res) => {
  return res.sendFile(path.resolve('public', 'index.html'));
});

export default appRouter;
