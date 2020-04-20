const express = require('express');
const router = express.Router();
const { getSolutions, addSolution, getSolution } = require('../controllers/solution_controller');

router
    .route('/')
    .get(getSolutions)
    .post(addSolution);

router
    .route('/solution/:id')
    .get(getSolution)
    
module.exports = router;