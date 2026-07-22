import pool from "../utils/db";

export const getAllTeachers = async () => {
  const result = await pool.query(
    "SELECT id, name, email, contact FROM teachers",
  );
  return result.rows;
};

export const createTeacher = async (id, name, email, contact, password) => {
  const result = await pool.query(
    "INSERT INTO teachers(id, name, email, contact, password) VALUES ($1, $2, $3, $4, $5) RETURNING id, name, email, contact",
    [id, name, email, contact, password],
  );

  return result.rows[0];
};

export const updateTeacher = async (id, name, email, contact, password) => {
  let query;
  let values;
  if (password) {
    query =
      "UPDATE teachers SET name=$1, email=$2, contact=$3, password=$4 WHERE id= $5 RETURNING id, name, email, contact";
    values = [name, email, contact, password, id];
  } else {
    query =
      "UPDATE teachers SET name=$1, email=$2, contact=$3 WHERE id= $4 RETURNING id, name, email, contact";
    values = [name, email, contact, id];
  }
  const result = await pool.query(query, values);

  return result.rows[0];
};

export const deleteTeacher = async (id) => {
  const result = await pool.query(
    "DELETE FROM teachers WHERE id=$1 RETURNING *",
    [id],
  );

  return result.rows[0];
};
