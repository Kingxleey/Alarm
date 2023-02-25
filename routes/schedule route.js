const express = require("express");
const{
protect,
restrictTo,
} = require ("../controllers/Auth controllers");

const {
createSchedule,
  deleteSchedule,
  updateSchedule,
  getSchedule,
  getAllSchedule
} = require("../controllers/schedule controllers");
const router = express.Router();

router.post ('/:jobId', protect, createSchedule)
router.delete('/', protect, restrictTo("admin"), deleteSchedule);
router.get('/:id', protect, getSchedule);
router.get('/', protect, getAllSchedule);
router.patch('/:id', protect, restrictTo("admin"), updateSchedule);
module.exports = router;