import {
  getAllSchedules,
  addSchedule,
  updateSchedule,
  deleteSchedule,
  getScheduleOfStudent,
} from "../models/schedule.model";

export const listSchdeule = async (req, res) => {
  try {
    const schedules = await getAllSchedules();
    res.status(200).json(schedules);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createSchdeules = async (req, res) => {
  try {
    const {
      id,
      class_id,
      teacher_id,
      day_of_week,
      start_time,
      end_time,
      subject_id,
    } = req.body;

    const newSchedule = await addSchedule(
      id,
      class_id,
      teacher_id,
      day_of_week,
      start_time,
      end_time,
      subject_id,
    );
    res.status(201).json(newSchedule);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editSchdule = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      class_id,
      teacher_id,
      day_of_week,
      start_time,
      end_time,
      subject_id,
    } = req.body;

    const updatedSchedule = await updateSchedule(
      id,
      class_id,
      teacher_id,
      day_of_week,
      start_time,
      end_time,
      subject_id,
    );
    res.status(200).json(updatedSchedule);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeSchedule = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedSchedule = await deleteSchedule(id);
    res.status(200).json(deletedSchedule);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMySchedule = async (req, res) => {
  try {
    const studentId = req.user.id;

    const mySchedule = await getScheduleOfStudent(studentId);
    if (!mySchedule || mySchedule.length === 0) {
      return res.status(404).json({ error: "Schedule not found" });
    }

    res.status(200).json(mySchedule);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
