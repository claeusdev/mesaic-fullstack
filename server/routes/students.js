const router = require('express').Router()
const controller = require('../controllers')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname)
  }
})
const upload = multer({ storage: storage })

// Matches /api/students for GET all Students and Add a new Student
router
  .route('/')
  .get(controller.getStudents)
  .post(upload.single('photo'), controller.addOne)

// Matches /api/students/:id for
// GET all a single Student
// UPDATE a Student
// DELETE a Student
router
  .route('/:id')
  .get(controller.getOne)
  .put(upload.single('photo'), controller.updateOne)
  .delete(controller.removeOne)

module.exports = router
