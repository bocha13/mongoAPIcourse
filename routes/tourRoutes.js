const express = require('express');
const {
  getAllTours,
  postTour,
  getTour,
  deleteTour,
  patchTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
} = require('../controllers/tourController');

const router = express.Router();

// middleware
// router.param('id', checkID);

router.route('/').get(getAllTours).post(postTour);
router.route('/tour-stats').get(getTourStats);
router.route('/monthly-plan/:year').get(getMonthlyPlan);
router.route('/top-5-cheap').get(aliasTopTours, getAllTours);
router.route('/:id').get(getTour).delete(deleteTour).patch(patchTour);

module.exports = router;
