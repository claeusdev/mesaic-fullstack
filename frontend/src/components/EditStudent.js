import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAStudent } from '../store/actions';
import moment from 'moment';
import axios from 'axios';
import styled from 'styled-components';

const EditPage = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
class EditStudent extends Component {
  state = {
    student: {},
    file: {}
  };
  handleImage = (e) => {
    const file = e.target.files[0];
    this.setState({ file });
  };
  componentDidMount = () => {
    const { getAStudent } = this.props;
    const id = this.props.match.params.id;
    getAStudent(id);
    const { editedStudent } = this.props;
    console.log(editedStudent);
    this.setState({ student: editedStudent });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { file } = this.state;

    const { firstname, lastname, birthdate, hobbies, photo, id } = this.refs;
    const studentHobbies = hobbies.value.split(',');
    const newStudent = new FormData();
    newStudent.append('photo', file);
    newStudent.append('firstName', firstname.value);
    newStudent.append('lastName', lastname.value);
    newStudent.append('dateOfBirth', birthdate.value);
    newStudent.append('hobbies', studentHobbies);

    axios({
      url: `http://localhost:4002/api/student/${id.value}`,
      method: 'PUT',
      data: newStudent,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((res) => {
      firstname.value = '';
      lastname.value = '';
      birthdate.value = '';
      hobbies.value = '';
      photo.value = '';
    });
  };
  render() {
    const { editedStudent } = this.props;
    return (
      <EditPage>
        <div className="col-md-7">
          <h1>Edit Student Details</h1>
          <hr />
          <form onSubmit={this.handleSubmit} id="form">
            <div className="form-group">
              <input
                type="hidden"
                name="id"
                ref="id"
                value={editedStudent._id}
              />
              <label htmlFor="firstname">First Name</label>
              <input
                id="firstname"
                defaultValue={editedStudent.firstName}
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
                defaultValue={editedStudent.lastName}
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
                defaultValue={moment(editedStudent.dateOfBirth).format(
                  'YYYY/DD/MM'
                )}
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
                defaultValue={editedStudent.hobbies}
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
              <img src={editedStudent.photo} width="120" height="120" alt="" />
            </div>
            <button type="submit" className="btn btn-primary">
              Save Student
            </button>
          </form>
        </div>
      </EditPage>
    );
  }
}

export default connect(
  (store) => ({ editedStudent: store.student }),
  { getAStudent }
)(EditStudent);
