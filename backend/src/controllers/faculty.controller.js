import {
  getAllFaculty,
  createFaculty,
  updateFaculty,
  deleteFaculty,
} from "../models/faculty.model";

export const listFaculty = async (req, res) => {
  try {
    const faculty = await getAllFaculty();
    res.json(faculty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addFaculty = async (req, res) => {
  try {
    const { id, name } = req.body;
    const newFaculty = await createFaculty(id, name);
    res.status(201).json(newFaculty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editFaculty = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const updatedFaculty = await updateFaculty(id, name);
    res.status(200).json(updatedFaculty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeFaculty = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFaculty = await deleteFaculty(id);
    res.status(200).json(deletedFaculty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
