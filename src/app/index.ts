import 'dotenv/config';
import app from './app';
import database from './database';
import logger from './core/logger';

(async () => {
  try {
    await database.authenticate();
    app.listen(3000, () => logger.info('Server started.'));
  } catch (err) {
    logger.error(err);
  }
})();
