import React from 'react';
import { Link } from 'react-router-dom';
import './UserCard.css'; // Import custom CSS

const UserCard = ({ user, onDelete }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="user-card">
        <img src={user.avatar} alt={user.first_name} className="user-avatar" />
        <div className="user-info">
          <h5>{user.first_name} {user.last_name}</h5>
          <p>{user.email}</p>
          <div className="user-actions">
            <Link to={`/edit/${user.id}`} className="btn btn-primary me-2">Edit</Link>
            <button className="btn btn-danger" onClick={() => onDelete(user.id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
