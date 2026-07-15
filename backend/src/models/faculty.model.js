import pool from "../utils/db";

export const getAllFaculty = async () => {
  const result = await pool.query("SELECT * fROM faculty");
  return result.rows;
};

export const createFaculty = async (id, name) => {
  const result = await pool.query(
    "INSERT INTO faculty(id, name) VALUES ($1, $2) RETURNING *",
    [id, name],
  );

  return result.rows[0];
};

export const updateFaculty = async (id, name) => {
  const result = await pool.query(
    "UPDATE faculty SET name = $1 where id = $2 RETURNING *",
    [name, id],
  );
  return result.rows[0];
};

export const deleteFaculty = async (id) => {
  const result = await pool.query(
    "DELETE FROM faculty WHERE id=$1 RETURNING *",
    [id],
  );

  return result.rows[0];
};
