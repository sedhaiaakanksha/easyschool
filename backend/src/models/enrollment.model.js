import pool from "../utils/db";

export const getAllEnrollments = async () => {
  const result = await pool.query("SELECT * FROM enrollments");
  return result.rows;
};

export const addEnrollement = async (id, student_id, subject_id) => {
  const result = await pool.query(
    "INSERT INTO enrollments (id, student_id, subject_id) VALUES ($1, $2, $3) RETURNING *",
    [id, student_id, subject_id],
  );
  return result.rows[0];
};

export const updateEnrollment = async (id, student_id, subject_id) => {
  const result = await pool.query(
    "UPDATE enrollments SET student_id=$1, subject_id = $2 WHERE id = $3 RETURNING *",
    [student_id, subject_id, id],
  );
  return result.rows[0];
};

export const deleteEnrollment = async (id) => {
  const result = await pool.query(
    "DELETE FROM enrollments WHERE id = $1 RETURNING *",
    [id],
  );

  return result.rows[0];
};
