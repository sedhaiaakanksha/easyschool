import pool from "../utils/db";

export const getAllTeacherAttendance = async () => {
  const result = await pool.query("SELECT * FROM teacher_attendance");
  return result.rows;
};

export const addTeacherAttendance = async (id, teacher_id, date, status) => {
  const result = await pool.query(
    "INSERT INTO teacher_attendance (id, teacher_id, date, status) VALUES ($1, $2, $3, $4) RETURNING *",
    [id, teacher_id, date, status],
  );
  return result.rows[0];
};

export const updateTeacherAttendance = async (id, teacher_id, date, status) => {
  const result = await pool.query(
    "UPDATE teacher_attendance SET teacher_id=$1, date=$2, status=$3 WHERE id=$4 RETURNING *",
    [teacher_id, date, status, id],
  );
  return result.rows[0];
};

export const deleteTeacherAttendance = async (id) => {
  const result = await pool.query(
    "DELETE FROM teacher_attendance WHERE id=$1 RETURNING *",
    [id],
  );
  return result.rows[0];
};
