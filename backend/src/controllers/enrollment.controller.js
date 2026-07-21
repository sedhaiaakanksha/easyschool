import {
  getAllEnrollments,
  addEnrollement,
  updateEnrollment,
  deleteEnrollment,
} from "../models/enrollment.model";

export const listEnrollments = async (req, res) => {
  try {
    const enrollments = await getAllEnrollments();
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createEnrollment = async (req, res) => {
  try {
    const { id, student_id, subject_id } = req.body;

    const newEnrollment = await addEnrollement(id, student_id, subject_id);
    res.status(201).json(newEnrollment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editEnrollment = async (req, res) => {
  try {
    const { id } = req.params;
    const { student_id, subject_id } = req.body;

    const updatedEnrollment = await updateEnrollment(
      id,
      student_id,
      subject_id,
    );

    res.status(200).json(updatedEnrollment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeEnrollment = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEnrollment = await deleteEnrollment(id);
    res.status(200).json(deletedEnrollment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
