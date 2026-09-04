import pool from '../database/connection.js';

afterAll(async () => {
  await pool.end();
});
