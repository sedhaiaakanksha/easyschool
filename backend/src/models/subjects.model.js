import pool from "../utils/db";

export const getAllSuject = async () => {
  const result = await pool.query("SELECT * FROM subjects");
  return result.rows;
};

export const addSubjects = async (id, name, code) => {
  const result = await pool.query(
    "INSERT INTO subjects (id, name, code) VALUES($1, $2, $3) RETURNING * ",
    [id, name, code],
  );
  return result.rows[0];
};

export const updateSubject = async (id, name, code) => {
  const result = await pool.query(
    "UPDATE subjects SET name=$1, code=$2 WHERE id=$3 RETURNING *",
    [name, code, id],
  );
  return result.rows[0];
};

export const deleteSubject = async (id) => {
  const result = await pool.query(
    "DELETE FROM subjects WHERE id =$1 RETURNING *",
    [id],
  );

  return result.rows[0];
};
