import pool from "../utils/db";

export const getAllFaculty = async () => {
  const result = await pool.query("SELECT * fROM faculty");
  return result.rows;
};

export const createFaculty = async (id, name) => {
  const response = await pool.query(
    "INSERT INTO faculty(id, name) VALUES ($1, $2) RETURNING *",
    [id, name],
  );

  return response.rows[0];
};
