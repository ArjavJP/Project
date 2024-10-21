const express = require('express');
const { createFollowUp, getFollowUps, updateFollowUp, deleteFollowUp } = require('../controllers/followUpController');
const router = express.Router();

router.route('/')
  .get(getFollowUps)
  .post(createFollowUp);

router.route('/:id')
  .put(updateFollowUp)
  .delete(deleteFollowUp);

module.exports = router;
