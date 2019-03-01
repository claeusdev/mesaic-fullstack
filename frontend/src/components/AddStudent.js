import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAStudent } from '../store/actions';
import axios from 'axios';
import { allStudents } from '../store/actions';
class AddStudent extends Component {
  state = {
    file: null
  };

  handleImage = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    this.setState({ file });
  };

  handleSubmit = async (e) => {
    console.log(this.props);
    e.preventDefault();

    const { file } = this.state;
    console.log(file);

    const { firstname, lastname, birthdate, hobbies, photo } = this.refs;
    const studentHobbies = hobbies.value.split(',');
    console.log(studentHobbies);
    const newStudent = new FormData();
    newStudent.append('photo', file);
    newStudent.append('firstName', firstname.value);
    newStudent.append('lastName', lastname.value);
    newStudent.append('dateOfBirth', birthdate.value);
    newStudent.append('hobbies', studentHobbies);

    console.log(newStudent);

    axios({
      url: `http://localhost:4002/api/student`,
      method: 'POST',
      data: newStudent,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((res) => {
      this.props.allStudents();
      firstname.value = '';
      lastname.value = '';
      birthdate.value = '';
      hobbies.value = '';
      photo.value = '';
    });
  };
  render() {
    return (
      <div>
        <h1 className="text-center">Add New Student</h1>
        <hr />
        <form onSubmit={this.handleSubmit} id="form">
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              id="firstname"
              name="firstname"
              ref="firstname"
              type="text"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>

            <input
              id="lastname"
              name="lastname"
              type="text"
              ref="lastname"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="birthdate">Date of Birth</label>

            <input
              id="birthdate"
              name="birthdate"
              type="date"
              ref="birthdate"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="hobbies">Hobbies</label>

            <input
              id="hobbies"
              name="hobbies"
              type="text"
              ref="hobbies"
              className="form-control"
            />
            <small>Enter your hobbies separated by a comma</small>
          </div>

          <div className="form-group">
            <label htmlFor="photo">Add photo</label>

            <input
              id="photo"
              name="photo"
              type="file"
              ref="photo"
              onChange={this.handleImage}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save Student
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  (store) => ({ students: store.students }),
  { addAStudent, allStudents }
)(AddStudent);
