import {
  getAllAttendanceRecord,
  addAttendanceRecord,
  updateAttendanceRecord,
  deleteAttendanceRecord,
  getAttendanceRecordByStudentId,
  getAttendanceRecordById,
} from "../models/attendanceRecords.model";

export const listAttendanceRecords = async (req, res) => {
  try {
    const attendanceRecord = await getAllAttendanceRecord();
    res.status(200).json(attendanceRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const listMyAttendanceRecord = async (req, res) => {
  try {
    const myAttendanceRecord = await getAttendanceRecordByStudentId(student_id);
    res.status(200).json(myAttendanceRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const listAttendanceRecordById = async (res, req) => {
  try {
    const attendanceRecordById = await getAttendanceRecordById(id);
    res.status(200).json(attendanceRecordById);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const createAttendanceRecord = async (req, res) => {
  try {
    const { id, student_id, date, status } = req.body;

    const newAttendanceRecord = await addAttendanceRecord(
      id,
      student_id,
      date,
      status,
    );
    res.status(201).json(newAttendanceRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editAttendanceRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const { student_id, date, status } = req.body;

    const updatedAttendanceRecord = await updateAttendanceRecord(
      id,
      student_id,
      date,
      status,
    );
    res.status(200).json(updatedAttendanceRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeAttendanceRecord = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedAttendanceRecord = await deleteAttendanceRecord(id);
    res.status(201).json(deletedAttendanceRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
