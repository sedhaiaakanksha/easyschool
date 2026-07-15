import pool from "../utils/db";

export const getAllClass = async () => {
  const result = await pool.query("SELECT * FROM classes");
  return result.rows;
};

export const addClass = async (
  id,
  grade,
  section,
  academic_year,
  teacher_id,
) => {
  const result = await pool.query(
    "INSERT INTO classes (id, grade, section, academic_year, teacher_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [id, grade, section, academic_year, teacher_id],
  );
  return result.rows[0];
};

export const updateClass = async (
  id,
  grade,
  section,
  academic_year,
  teacher_id,
) => {
  const result = await pool.query(
    "UPDATE classes SET grade=$1, section=$2, academic_year=$3, teacher_id=$4 WHERE id=$5 RETURNING *",
    [grade, section, academic_year, teacher_id, id],
  );
  return result.rows[0];
};

export const deleteClass = async (id) => {
  const result = await pool.query(
    "DELETE FROM classes WHERE id=$1 RETURNING *",
    [id],
  );
  return result.rows[0];
};
