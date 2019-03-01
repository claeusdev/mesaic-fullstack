import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allStudents, removeAStudent } from '../store/actions';
import Student from './Student';
import AddStudent from './AddStudent';

class Students extends Component {
  componentDidMount = () => {
    const { allStudents } = this.props;
    allStudents();
  };

  render() {
    const { students } = this.props;
    return (
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h1>All students</h1>
              <hr />
              {students &&
                students.map((student) => (
                  <Student
                    {...student}
                    key={student._id}
                    handleDelete={() => {
                      this.props.removeAStudent(student._id);
                      this.props.allStudents();
                    }}
                  />
                ))}
            </div>
            <div className="col-md-5">
              <AddStudent />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default connect(
  (store) => ({ students: store.students }),
  { allStudents, removeAStudent }
)(Students);
