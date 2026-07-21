import pool from "../utils/db";

export const getAllFeeRecords = async () => {
  const result = await pool.query("SELECT * FROM fee_records");
  return result.rows;
};

export const addFeeRecord = async (
  id,
  student_id,
  amount_due,
  amount_paid,
  due_date,
  status,
) => {
  const result = await pool.query(
    "INSERT INTO fee_records(id, student_id, amount_due, amount_paid, due_date, status) VALUES($1, $2, $3, $4, $5, $6) RETURNING * ",
    [id, student_id, amount_due, amount_paid, due_date, status],
  );
  return result.rows[0];
};

export const updateFeeRecord = async (
  id,
  student_id,
  amount_due,
  amount_paid,
  due_date,
  status,
) => {
  const result = await pool.query(
    "UPDTE fee_records SET student_id = $1, amount_due= $2, amount_paid=$3, due_date=$4, status=$5 WHERE id= $6 RETURNING *",
    [student_id, amount_due, amount_paid, due_date, status, id],
  );
  return result.rows[0];
};

export const deleteFeeRecord = async (id) => {
  const result = await pool.query(
    "DELETE FROM fee_records WHERE id =$1 RETURNING *",
    [id],
  );

  return result.rows[0];
};
