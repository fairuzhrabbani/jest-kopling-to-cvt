import pool from '../connection.js';
import logger from '../../utils/logger.js';

class UserRepository {
  async findByEmail(email) {
    logger.debug(`Finding user by email: ${email}`);
    const query = `
      SELECT
        id,
        name,
        email,
        role
      FROM users
      WHERE email = $1
    `;

    const result = await pool.query(query, [email]);
    logger.debug(`User query returned ${result.rowCount} record(s)`);

    return result.rows[0];
  }

  async findById(id) {
    logger.debug(`Finding user by id: ${id}`);
    const query = `
      SELECT
        id,
        name,
        email,
        role
      FROM users
      WHERE id = $1
    `;

    const result = await pool.query(query, [id]);
    logger.debug(`User query returned ${result.rowCount} record(s)`);

    return result.rows[0];
  }
}

export default new UserRepository();
