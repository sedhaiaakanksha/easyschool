import pool from "./src/utils/db";

const result = await pool.query("SELECT NOW()");
console.log("Connected! Server Time:", result.rows[0].now);
process.exit();
