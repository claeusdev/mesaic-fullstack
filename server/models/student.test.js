import { Student } from './index'
import moment from 'moment'

describe('Student model', () => {
  describe('schema', () => {
    test('firstName', () => {
      const firstName = Student.schema.obj.firstName
      expect(firstName).toEqual({
        type: String,
        required: true,
        trim: true,
        maxlength: 50
      })
    })
    test('lastName', () => {
      const lastName = Student.schema.obj.lastName
      expect(lastName).toEqual({
        type: String,
        required: true,
        trim: true,
        maxlength: 50
      })
    })

    // test('dateOfBirth', () => {
    //   const dob = Student.schema.obj.dateOfBirth
    //   expect(moment(dob).format('LL')).toEqual(Date)
    // })

    test('photo', () => {
      const photo = Student.schema.obj.photo
      expect(photo).toEqual({
        type: String,
        required: true
      })
    })
    test('hobbies', () => {
      const hobbies = Student.schema.obj.hobbies
      expect(hobbies).toEqual({
        type: [String]
      })
    })
  })
})
