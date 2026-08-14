import {
  getAllTeachers,
  getTeacherByEmail,
  addTeacher,
  updateTeacher,
  deleteTeacher,
} from "../models/teacher.model";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const listTeacher = async (req, res) => {
  try {
    const teachers = await getAllTeachers();

    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTeacher = async (req, res) => {
  try {
    const { id, name, email, contact } = req.body;

    const newTeacher = await addTeacher(id, name, email, contact);

    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, contact, password } = req.body;

    let hashedPassword;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }
    const updatedTeacher = await updateTeacher(
      id,
      name,
      email,
      contact,
      hashedPassword,
    );
    res.status(200).json(updatedTeacher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTeacher = await deleteTeacher(id);
    res.status(200).json(deletedTeacher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const registerTeacher = async (req, res) => {
  try {
    const { email, password } = req.body;

    const teacher = await getTeacherByEmail(email);

    if (!teacher) {
      return res
        .status(404)
        .json({ error: "No teacher record found with this email" });
    }

    if (teacher.password) {
      return res
        .status(400)
        .json({ error: "This account is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedTeacher = await updateTeacher(
      teacher.id,
      teacher.name,
      teacher.email,
      teacher.contact,
      hashedPassword,
    );

    res
      .status(200)
      .json({ message: "Registration successful", teacher: updatedTeacher });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginTeacher = async (req, res) => {
  try {
    const { email, password } = req.body;
    const teacher = await getTeacherByEmail(email);

    if (!teacher) {
      return res.status(401).json({ error: "Invalid Crediential" });
    }

    const isMatch = await bcrypt.compare(password, teacher.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid Credientials" });
    }

    const token = jwt.sign(
      { id: teacher.id, role: "teacher" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );
    res.status(200).json({ token, role: "teacher" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
