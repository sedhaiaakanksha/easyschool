import {
  getAllStudents,
  addStudent,
  updateStudent,
  deleteStudent,
  getStudentByEmail,
} from "../models/student.model";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const listStudent = async (req, res) => {
  try {
    const students = await getAllStudents();

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createStudent = async (req, res) => {
  try {
    const {
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
    } = req.body;

    const newStudent = await addStudent(
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
    );

    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const {
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
    } = req.body;
    const profilePicturePath = req.file ? req.file.path : undefined;
    let hashedPassword;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }
    const updatedStudent = await updateStudent(
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
      hashedPassword,
      profilePicturePath,
    );

    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStudent = await deleteStudent(id);
    res.status(200).json(deletedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const registerStudent = async (req, res) => {
  try {
    const { email, password } = req.body;
    const profilePicturePath = req.file ? req.file.path : null;

    const student = await getStudentByEmail(email);

    if (!student) {
      return res
        .status(404)
        .json({ error: "No Student record is found with this email" });
    }

    if (student.password) {
      return res
        .status(404)
        .json({ error: "This account is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedStudent = await updateStudent(
      student.id,
      student.first_name,
      student.last_name,
      student.email,
      student.contact,
      student.admission_number,
      student.admission_date,
      student.class_id,
      student.faculty_id,
      student.status,
      hashedPassword,
      profilePicturePath,
    );

    res
      .status(200)
      .json({ message: " Regestration sucessful", student: updatedStudent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await getStudentByEmail(email);

    if (!student) {
      return res.status(400).json({ error: "Invalid Crediential" });
    }

    const isMatch = await bcrypt.compare(password, student.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid Credential" });
    }

    const token = jwt.sign(
      { id: student.id, role: "student" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.status(200).json({ token, role: "student" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
