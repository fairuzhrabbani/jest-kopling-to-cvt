import pool from '../connection.js';

class UserRepository {
  async findByEmail(email) {
    const query = `
      SELECT
        id,
        name,
        email,
        password,
        created_at,
        updated_at
      FROM users
      WHERE email = $1
    `;

    const result = await pool.query(query, [email]);

    return result.rows[0];
  }

  async findById(id) {
    const query = `
      SELECT
        id,
        name,
        email
      FROM users
      WHERE id = $1
    `;

    const result = await pool.query(query, [id]);

    return result.rows[0];
  }
}

export default new UserRepository();
