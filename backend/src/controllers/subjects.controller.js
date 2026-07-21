import {
  getAllSuject,
  addSubjects,
  updateSubject,
  deleteSubject,
} from "../models/subjects.model";

export const listSubjects = async (req, res) => {
  try {
    const subjects = await getAllSuject();
    res.staus(200).json(subjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createSubject = async (req, res) => {
  try {
    const { id, name, code } = req.body;

    const newSubject = await addSubjects(id, name, code);
    res.status(201).json(newSubject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editSubject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, code } = req.body;

    const updatedSubject = await updateSubject(id, name, code);
    res.status(200).json(updatedSubject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeSubject = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedSubject = await deleteSubject(id);
    res.status(200).json(deletedSubject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
