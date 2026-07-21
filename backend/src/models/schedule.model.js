import pool from "../utils/db";

export const getAllSchedules = async () => {
  const result = await pool.query("SELECT * FROM subjects");
  return result.rows;
};

export const addSchedule = async (
  id,
  class_id,
  teacher_id,
  day_of_week,
  start_time,
  end_time,
  subject_id,
) => {
  const result = await pool.query(
    "INSERT INTO schedules (id, class_id, teacher_id, day_of_week, start_time, end_time, subject_id ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [id, class_id, teacher_id, day_of_week, start_time, end_time, subject_id],
  );

  return result.rows[0];
};

export const updateSchedule = async (
  id,
  class_id,
  teacher_id,
  day_of_week,
  start_time,
  end_time,
  subject_id,
) => {
  const result = await pool.query(
    "UPDATE schedules SET  class_id=$1, teacher_id=$2, day_of_week=$3, start_time=$4, end_time=$5, subject_id=$6 WHERE id= $7 RETURNING *",
    [class_id, teacher_id, day_of_week, start_time, end_time, subject_id, id],
  );

  return result.rows[0];
};

export const deleteSchedule = async (id) => {
  const result = await pool.query("DELETE FROM schedules WHERE id=$1*", [id]);

  return result.rows[0];
};
