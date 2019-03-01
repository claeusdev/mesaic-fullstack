const db = require('../models')

exports.getStudents = async (req, res, next) => {
  try {
    const students = await db.Student.find()
    res.status(200).json({ data: students })
  } catch (error) {
    error.status = 400
    next({ errors: error })
  }
}

exports.getOne = async (req, res, next) => {
  try {
    const student = await db.Student.findOne({ _id: req.params.id })

    res.status(200).json({ data: student })
  } catch (error) {
    error.status = 400
    next({ errors: error })
  }
}

exports.addOne = async (req, res, next) => {
  try {
    const { firstName, lastName, dateOfBirth, hobbies } = req.body

    const photo = req.file.path
    const student = await db.Student.create({
      firstName,
      lastName,
      dateOfBirth,
      photo: `http://localhost:4002/${photo}`,
      hobbies
    })
    student.save()
    res.status(200).json({ data: student })
  } catch (error) {
    next({ errors: error })
  }
}

exports.updateOne = async (req, res, next) => {
  try {
    console.log(req.body)
    const { firstName, lastName, dateOfBirth, hobbies } = req.body
    const photo = req.file.path
    const updatedStudent = db.Student.findOneAndUpdate(
      {
        _id: req.params.id
      },
      {
        firstName,
        lastName,
        dateOfBirth,
        hobbies,
        photo: `http://localhost:4002/${photo}`
      },
      { new: true }
    )
      .lean()
      .exec()
    res.status(200).json({ data: updatedStudent })
  } catch (error) {
    error.status = 400
    next({ errors: error })
  }
}

exports.removeOne = async (req, res, next) => {
  try {
    await db.Student.findOneAndRemove({
      _id: req.params.id
    }).exec()
    res.status(200).json({})
  } catch (error) {
    error.status = 400
    next({ errors: error })
  }
}
