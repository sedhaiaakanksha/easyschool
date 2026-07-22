import {
  getAllTeachers,
  createTeacher,
  updateTeacher,
  deleteTeacher,
} from "../models/teacher.model";

import bcrypt from "bcryptjs";

export const listTeacher = async (req, res) => {
  try {
    const teachers = await getAllTeachers();

    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addTeacher = async (req, res) => {
  try {
    const { id, name, email, contact, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newTeacher = await createTeacher(
      id,
      name,
      email,
      contact,
      hashedPassword,
    );

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
