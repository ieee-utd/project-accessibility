const express = require('express');
const router = express.Router();
const { getSolutions, addSolution, getSolution , deleteSolution , updateSolution } = require('../controllers/solution_controller');

router
    .route('/')
    .get(getSolutions)
    .post(addSolution);

router
    .route('/:id')
    .get(getSolution)
    .delete(deleteSolution)
    .patch(updateSolution);
    
module.exports = router;