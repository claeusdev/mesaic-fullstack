import { combineReducers } from 'redux';

import error from './error';
import { students, student, addstudent, removeStudent } from './student';
export default combineReducers({
  error,
  students,
  student,
  addstudent,
  removeStudent
});
