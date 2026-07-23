import pool from "../utils/db";

export const getAdminByEmail = async (email) => {
  const result = await pool.query(
    "SELECT id, name, email, password, role FROM admins WHERE email=$1",
    [email],
  );
  return result.rows[0];
};

export const updateAdmin = async (id, name, email, password, role) => {
  let query;
  let values;
  if (password) {
    query =
      "UPDATE admins SET name = $1, email = $2, password = $3, role=$4 WHERE id= $5 RETURNING name, email, role, id";
    values = [name, email, password, role, id];
  } else {
    query =
      "UPDATE admins SET name = $1, email = $2, role=$3 WHERE id= $4 RETURNING name, email, role, id";
    values = [name, email, role, id];
  }
  const result = await pool.query(query, values);
  return result.rows[0];
};
