import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  margin: 0 0 4% 0;
  box-shadow: 0px 3px 8px -4px rgba(0, 0, 0, 0.15);
  display: block;
  transform: translate3d(0, 0, 0);
  transition: 0.3s;
  padding: 10px;
`;
const Student = ({
  _id,
  firstName,
  lastName,
  dateOfBirth,
  hobbies,
  photo,
  handleDelete
}) => {
  return (
    <Card>
      <div className="media my-2">
        <img
          src={photo}
          className="mr-3 img-fluid"
          width="80"
          height="80"
          alt="..."
        />
        <div className="media-body">
          <Link to={`/student/${_id}`}>
            <h5 className="mt-0">
              {firstName}, {lastName}
            </h5>
          </Link>
          <p>Date of Birth: {moment(dateOfBirth).format('LL')}</p>
          <p>
            Hobbies:{' '}
            {hobbies &&
              hobbies
                .toString()
                .split(',')
                .map((hobby) => (
                  <span className="badge badge-default" key={hobby}>
                    {hobby}
                  </span>
                ))}
          </p>
          <span className="badge badge-warning mr-2">
            <Link to={`/student/${_id}/edit`}>Edit</Link>
          </span>
          <span
            style={{ color: '#fff', cursor: 'pointer' }}
            className="badge badge-danger"
            onClick={handleDelete}>
            Delete
          </span>
        </div>
      </div>
    </Card>
  );
};

export default Student;
