import pool from "../utils/db";

export const getAllTeachers = async () => {
  const result = await pool.query("SELECT * FROM teachers");
  return result.rows;
};

export const addTeacher = async (id, name, email, contact) => {
  const result = await pool.query(
    "INSERT INTO teachers(id, name, email, contact) VALUES ($1, $2, $3, $4) RETURNING *",
    [id, name, email, contact],
  );

  return result.rows[0];
};

export const updateTeacher = async (id, name, email, contact) => {
  const result = await pool.query(
    "UPDATE teachers SET name=$1, email=$2, contact=$3 WHERE id= $4 RETURNING *",
    [name, email, contact, id],
  );

  return result.rows[0];
};

export const deleteTeacher = async (id) => {
  const result = await pool.query(
    "DELETE FROM teachers WHERE id=$1 RETURNING *",
    [id],
  );

  return result.rows[0];
};
