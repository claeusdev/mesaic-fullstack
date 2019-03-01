import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAStudent } from '../store/actions';
import moment from 'moment';
class StudentShow extends Component {
  componentDidMount = () => {
    const { getAStudent } = this.props;
    const id = this.props.match.params.id;
    getAStudent(id);
  };

  render() {
    const {
      firstName,
      lastName,
      dateOfBirth,
      hobbies,
      photo
    } = this.props.student;

    return (
      <main>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={photo} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h1>
              Name: {firstName}, {lastName}
            </h1>
            <p>Date of Birth: {moment(dateOfBirth).format('LL')}</p>

            <p>
              Hobbies:
              {hobbies &&
                hobbies
                  .toString()
                  .split(',')
                  .map((hobby) => <li>{hobby}</li>)}
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default connect(
  (store) => ({ student: store.student }),
  { getAStudent }
)(StudentShow);
