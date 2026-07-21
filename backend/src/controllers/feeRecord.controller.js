import {
  getAllFeeRecords,
  addFeeRecord,
  updateFeeRecord,
  deleteFeeRecord,
} from "../models/feeRecords.model";

export const listFeeRecords = async (req, res) => {
  try {
    const feeRecords = await getAllFeeRecords();
    res.status(200).json(feeRecords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createFeeRecords = async (req, res) => {
  try {
    const { id, student_id, amount_due, amount_paid, due_date, status } =
      req.body;

    const newFeeRecord = await addFeeRecord(
      id,
      student_id,
      amount_due,
      amount_paid,
      due_date,
      status,
    );

    res.status(201).json(newFeeRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editFeeRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const { student_id, amount_due, amount_paid, status, due_date } = req.body;

    const updatedFeeRecord = await updateFeeRecord(
      id,
      student_id,
      amount_due,
      amount_paid,
      due_date,
      status,
    );

    res.status(200).json(updatedFeeRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeFeeRecord = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedFeeRecord = await deleteFeeRecord(id);

    res.status(200).json(deletedFeeRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
