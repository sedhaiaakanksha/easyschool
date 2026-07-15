import { getAllFaculty, createFaculty } from "../models/faculty.model";

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
