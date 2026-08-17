import pool from "../utils/db";

export const getAllStudents = async () => {
  const result = await pool.query(
    "SELECT id, first_name, last_name, email, contact, admission_number, admission_date, class_id, faculty_id, status, profile_picture FROM students",
  );
  return result.rows;
};

export const getStudentByEmail = async (email) => {
  const result = await pool.query("SELECT * FROM students WHERE email =$1", [
    email,
  ]);
  return result.rows[0];
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
) => {
  const result = await pool.query(
    "INSERT INTO students( id, first_name, last_name, email, contact, admission_number, admission_date, class_id, faculty_id, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10 ) RETURNING id, first_name, last_name, email, contact, admission_number, admission_date, class_id, faculty_id, status",
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
  profile_picture,
) => {
  let query;
  let values;

  if (password && profile_picture) {
    query = `UPDATE students SET first_name=$1, last_name=$2, email=$3, contact=$4, admission_number=$5, admission_date=$6, class_id=$7, faculty_id=$8, status=$9, password=$10, profile_picture=$11 WHERE id=$12 RETURNING id, first_name, last_name, email, contact, admission_number, admission_date, class_id, faculty_id, status, profile_picture`;
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
      profile_picture,
      id,
    ];
  } else if (password) {
    query = `UPDATE students SET first_name=$1, last_name=$2, email=$3, contact=$4, admission_number=$5, admission_date=$6, class_id=$7, faculty_id=$8, status=$9, password=$10 WHERE id=$11 RETURNING id, first_name, last_name, email, contact, admission_number, admission_date, class_id, faculty_id, status, profile_picture`;
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
  } else if (profile_picture) {
    query = `UPDATE students SET first_name=$1, last_name=$2, email=$3, contact=$4, admission_number=$5, admission_date=$6, class_id=$7, faculty_id=$8, status=$9, profile_picture=$10 WHERE id=$11 RETURNING id, first_name, last_name, email, contact, admission_number, admission_date, class_id, faculty_id, status, profile_picture`;
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
      profile_picture,
      id,
    ];
  } else {
    query = `UPDATE students SET first_name=$1, last_name=$2, email=$3, contact=$4, admission_number=$5, admission_date=$6, class_id=$7, faculty_id=$8, status=$9 WHERE id=$10 RETURNING id, first_name, last_name, email, contact, admission_number, admission_date, class_id, faculty_id, status, profile_picture`;
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
