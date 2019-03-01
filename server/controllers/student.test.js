import student from './student'
import { isFunction } from 'lodash'

describe('item controllers', () => {
  test('has crud controllers', () => {
    const crudMethods = [
      'getOne',
      'getStudents',
      'addOne',
      'removeOne',
      'updateOne'
    ]

    crudMethods.forEach(name => expect(isFunction(student[name])).toBe(true))
  })
})
