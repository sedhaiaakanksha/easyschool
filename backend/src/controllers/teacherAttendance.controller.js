import {
  getAllTeacherAttendance,
  addTeacherAttendance,
  updateTeacherAttendance,
  deleteTeacherAttendance,
} from "../models/teacherAttendance.model";

export const listTeacherAttendance = async (req, res) => {
  try {
    const records = await getAllTeacherAttendance();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTeacherAttendance = async (req, res) => {
  try {
    const { id, teacher_id, date, status } = req.body;
    const newRecord = await addTeacherAttendance(id, teacher_id, date, status);
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editTeacherAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const { teacher_id, date, status } = req.body;
    const updatedRecord = await updateTeacherAttendance(
      id,
      teacher_id,
      date,
      status,
    );
    res.status(200).json(updatedRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeTeacherAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecord = await deleteTeacherAttendance(id);
    res.status(200).json(deletedRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
