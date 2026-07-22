import pool from "../utils/db";

export const getAllStudents = async () => {
  const result = await pool.query(
    "SELECT id, first_name, last_name, email, contact, admission_number, admission_date, class_id, faculty_id, status FROM students",
  );
  return result.rows;
};

export const addStudent = async (
  id,
  first_name,
  last_name,
  email,
  contact,
  admission_number,
  admission_date,
  class_id,
  faculty_id,
  status,
  password,
) => {
  const result = await pool.query(
    "INSERT INTO students( id, first_name, last_name, email, contact, admission_number, admission_date, class_id, faculty_id, status, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10 , $11) RETURNING id, first_name, last_name, email, contact, admission_number, admission_date, class_id, faculty_id, status",
    [
      id,
      first_name,
      last_name,
      email,
      contact,
      admission_number,
      admission_date,
      class_id,
      faculty_id,
      status,
      password,
    ],
  );
  return result.rows[0];
};

export const updateStudent = async (
  id,
  first_name,
  last_name,
  email,
  contact,
  admission_number,
  admission_date,
  class_id,
  faculty_id,
  status,
  password,
) => {
  let query;
  let values;
  if (password) {
    query =
      "UPDATE students SET first_name=$1, last_name=$2, email=$3, contact=$4, admission_number=$5, admission_date=$6, class_id=$7, faculty_id=$8, status=$9, password=$10 WHERE id=$11 RETURNING id, first_name, last_name, email, contact, admission_number, admission_date, class_id, faculty_id, status";

    values = [
      first_name,
      last_name,
      email,
      contact,
      admission_number,
      admission_date,
      class_id,
      faculty_id,
      status,
      password,
      id,
    ];
  } else {
    query =
      "UPDATE students SET first_name=$1, last_name=$2, email=$3, contact=$4, admission_number=$5, admission_date=$6, class_id=$7, faculty_id=$8, status=$9  WHERE id=$10 RETURNING  first_name, last_name,email,contact,admission_number,admission_date, class_id, faculty_id,status";
    values = [
      first_name,
      last_name,
      email,
      contact,
      admission_number,
      admission_date,
      class_id,
      faculty_id,
      status,
      id,
    ];
  }
  const result = await pool.query(query, values);
  return result.rows[0];
};

export const deleteStudent = async (id) => {
  const result = await pool.query(
    "DELETE FROM students WHERE id=$1 RETURNING *",
    [id],
  );
  return result.rows[0];
};
