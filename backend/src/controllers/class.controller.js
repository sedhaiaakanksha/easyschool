import {
  getAllClass,
  addClass,
  updateClass,
  deleteClass,
} from "../models/class.model";

export const listClass = async (req, res) => {
  try {
    const classes = await getAllClass();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createClass = async (req, res) => {
  try {
    const { id, grade, section, academic_year, teacher_id } = req.body;
    const newClass = await addClass(
      id,
      grade,
      section,
      academic_year,
      teacher_id,
    );

    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editClass = async (req, res) => {
  try {
    const { id } = req.params;
    const { grade, section, academic_year, teacher_id } = req.body;
    const updatedClass = await updateClass(
      id,
      grade,
      section,
      academic_year,
      teacher_id,
    );

    res.status(200).json(updatedClass);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeClass = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedClass = await deleteClass(id);

    res.status(200).json(deletedClass);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
