const express = require('express');
const {
  getAllTours,
  postTour,
  getTour,
  deleteTour,
  patchTour,
  checkID,
  checkBody,
} = require('../controllers/tourController');

const router = express.Router();

// middleware
router.param('id', checkID);

router.route('/').get(getAllTours).post(checkBody, postTour);
router.route('/:id').get(getTour).delete(deleteTour).patch(patchTour);

module.exports = router;
