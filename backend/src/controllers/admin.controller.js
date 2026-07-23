import { getAdminByEmail, updateAdmin } from "../models/admin.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await getAdminByEmail(email);

    if (!admin) {
      return res.status(401).json({ error: " Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: admin.id, role: admin.role },
      process.env.JWT_SECRECT,
      { expiresIn: "1d" },
    );
    res.status(200).json({ token, role: admin.role });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
