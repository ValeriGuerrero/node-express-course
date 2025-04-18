const express = require('express')

const router = express.Router()
const { getAllTasks,
    createTasks,
    getTask,
    updateTask,
    deleteTask } = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTasks)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

/*
const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson,
} = require('../controllers/people')


router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)
*/
module.exports = router
