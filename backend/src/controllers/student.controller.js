import {
  getAllStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../models/student.model";

import bcrypt from "bcryptjs";

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
      password,
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
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
      hashedPassword,
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
