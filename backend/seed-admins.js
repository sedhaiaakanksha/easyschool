import bcrypt from "bcryptjs";
import pool from "./src/utils/db";

const admins = [
  {
    id: "ADS1",
    name: "SSD",
    email: "ssd@easyschool.com",
    password: "ssd@123",
    role: "ssd_admin",
  },
  {
    id: "ADR2",
    name: "RTE",
    email: "rte@easyschool.com",
    password: "rte@123",
    role: "rte_admin",
  },
  {
    id: "ADF3",
    name: "Finance",
    email: "finance@easyschool.com",
    password: "finance@123",
    role: "finance_admin",
  },
  {
    id: "ADA4",
    name: "Academy",
    email: "academy@easyschool.com",
    password: "academy@123",
    role: "academy_admin",
  },
];

for (const admin of admins) {
  const hashedPassword = await bcrypt.hash(admin.password, 10);

  await pool.query(
    "INSERT INTO admins (id, name, email, password, role) VALUES ($1, $2, $3, $4, $5)",
    [admin.id, admin.name, admin.email, admin.password, admin.role],
  );

  console.log(`Created ${admin.role}`);
}
process.exit();
