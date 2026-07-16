import {
  getAllStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../models/student.model";

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
    } = req.body;

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
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
