import pool from "../utils/db";

export const getAllSubjects = async () => {
  const result = await pool.query("SELECT * FROM subjects");
  return result.rows;
};
