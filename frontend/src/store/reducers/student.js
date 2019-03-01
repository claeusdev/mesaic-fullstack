import {
  GET_STUDENTS,
  GET_STUDENT,
  ADD_STUDENT,
  REMOVE_STUDENT
} from '../actiontypes';

export const students = (state = [], action = {}) => {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students.data;
    default:
      return state;
  }
};

export const student = (state = {}, action) => {
  switch (action.type) {
    case GET_STUDENT:
      return action.student.data;
    default:
      return state;
  }
};

export const addstudent = (state = {}, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return action.student.data;
    default:
      return state;
  }
};

export const removeStudent = (state = [], action) => {
  switch (action.type) {
    case REMOVE_STUDENT:
      return state;
    default:
      return state;
  }
};
