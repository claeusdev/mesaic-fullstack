import { addError, removeError } from './error';
import {
  GET_STUDENTS,
  GET_STUDENT,
  ADD_STUDENT,
  REMOVE_STUDENT
} from '../actiontypes';
import api from '../../services/api';
import Axios from 'axios';

export const getAllStudents = (students) => ({
  type: GET_STUDENTS,
  students
});

export const getStudent = (student) => ({
  type: GET_STUDENT,
  student
});

export const addStudent = (student) => ({
  type: ADD_STUDENT,
  student
});

export const removeStudent = (student) => ({
  type: REMOVE_STUDENT,
  student
});

export const allStudents = () => {
  return async (dispatch) => {
    try {
      const students = await api.call('get', `api/student`);
      dispatch(getAllStudents(students));
      dispatch(removeError());
    } catch (error) {
      dispatch(addError(error));
    }
  };
};

// Simple action to get add  student
// The value passed as (data) is the data of the student
// Call the api service with the method, path and data
// Returns a user, passed to setUser actionCreator
export const addAStudent = (data) => {
  return async (dispatch) => {
    try {
      const { firstName, lastName, dateOfBirth, photo } = data;
      const student = await Axios({
        url: `http://localhost:4002/api/student`,
        method: 'POST',
        data: {
          firstName,
          lastName,
          dateOfBirth,
          photo
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      dispatch(addStudent(student));
      dispatch(removeError());
    } catch (err) {
      console.log(err);
      dispatch(addError(err.response));
    }
  };
};

// Simple action to get a single student
// The value passed as (id) is the id of the student slected
// Call the api service with the method, path and student _id
// Returns a user, passed to getStudent actionCreator
export const getAStudent = (id) => {
  return async (dispatch) => {
    try {
      const student = await api.call('get', `api/student/${id}`);
      dispatch(getStudent(student));
      dispatch(removeError());
    } catch (err) {
      dispatch(addError(err));
    }
  };
};

export const removeAStudent = (id) => {
  return async (dispatch) => {
    try {
      await api.call('delete', `api/student/${id}`);
      dispatch(removeStudent(id));
      dispatch(removeError());
    } catch (error) {
      dispatch(addError(error));
    }
  };
};
