import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UserEdit.css'; // Import custom CSS

const UserEdit = () => {
  const { id } = useParams();
  const [user, setUser] = useState({ first_name: '', last_name: '', email: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        setUser(response.data.data);
      } catch (err) {
        console.error('Failed to fetch user details');
      }
    };
    fetchUser();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://reqres.in/api/users/${id}`, user);
      setMessage('User updated successfully!');
      setTimeout(() => navigate('/users'), 2000);
    } catch (err) {
      setMessage('Failed to update user.');
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="edit-user-page">
      <div className="edit-user-container">
        <h2>Edit User</h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              name="first_name"
              value={user.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              name="last_name"
              value={user.last_name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          {message && <p className="text-success">{message}</p>}
          <button type="submit" className="btn btn-primary w-100">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UserEdit;
