import pool from "../utils/db";

export const getAllAttendanceRecord = async () => {
  const result = await pool.query("SELECT * FROM attendance_records");

  return result.rows;
};

export const addAttendanceRecord = async (id, student_id, date, status) => {
  const result = await pool.query(
    "INSERT INTO attendance_records(id, student_id, date, status) VALUES($1, $2, $3, $4) RETURNING *",
    [id, student_id, date, status],
  );
  return result.rows[0];
};

export const updateAttendanceRecord = async (id, student_id, date, status) => {
  const result = await pool.query(
    "UPDATE attendance_records SET student_id = $1, date = $2, status=$3 WHERE id =$4 RETURNING *",
    [student_id, date, status, id],
  );
  return result.rows[0];
};

export const deleteAttendanceRecord = async (id) => {
  const result = await pool.query(
    "DELETE FROM attendance_records WHERE id =$1 RETURNING *",
    [id],
  );

  return result.rows[0];
};
