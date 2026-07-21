import {
  getAllExamResults,
  addExamResult,
  updateExamResult,
  deleteExamResult,
} from "../models/examResult.model";

export const listExamResults = async (req, res) => {
  try {
    const examResults = await getAllExamResults();
    res.status(200).json(examResults);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createExamResult = async (req, res) => {
  try {
    const { id, student_id, subject_id, exam_date, marks_obtained, max_marks } =
      req.body;
    const newExamResult = await addExamResult(
      id,
      student_id,
      subject_id,
      exam_date,
      marks_obtained,
      max_marks,
    );
    res.status(201).json(newExamResult);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editExamResult = async (req, res) => {
  try {
    const { id } = req.params;
    const { student_id, subject_id, exam_date, marks_obtained, max_marks } =
      req.body;
    const updatedExamResult = await updateExamResult(
      id,
      student_id,
      subject_id,
      exam_date,
      marks_obtained,
      max_marks,
    );
    res.status(200).json(updatedExamResult);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeExamResult = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExamResult = await deleteExamResult(id);
    res.status(200).json(deletedExamResult);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
