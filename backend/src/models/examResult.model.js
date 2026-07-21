import pool from "../utils/db";

export const getAllExamResults = async () => {
  const result = await pool.query("SELECT * FROM exam_results");
  return result.rows;
};

export const addExamResult = async (
  id,
  student_id,
  subject_id,
  exam_date,
  marks_obtained,
  max_marks,
) => {
  const result = await pool.query(
    "INSERT INTO exam_results (id, student_id, subject_id, exam_date, marks_obtained, max_marks) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [id, student_id, subject_id, exam_date, marks_obtained, max_marks],
  );
  return result.rows[0];
};

export const updateExamResult = async (
  id,
  student_id,
  subject_id,
  exam_date,
  marks_obtained,
  max_marks,
) => {
  const result = await pool.query(
    "UPDATE exam_results SET student_id=$1, subject_id=$2, exam_date=$3, marks_obtained=$4, max_marks=$5 WHERE id=$6 RETURNING *",
    [student_id, subject_id, exam_date, marks_obtained, max_marks, id],
  );
  return result.rows[0];
};

export const deleteExamResult = async (id) => {
  const result = await pool.query(
    "DELETE FROM exam_results WHERE id=$1 RETURNING *",
    [id],
  );
  return result.rows[0];
};
