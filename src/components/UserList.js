import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import './UserList.css'; // Import custom CSS

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  return (
    <div className="user-list-page">
      <div className="container">
        <h2 className="text-center mb-4">User List</h2>
        <div className="row">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
        <div className="pagination-buttons mt-4">
          {page > 1 && (
            <button className="btn btn-secondary" onClick={() => setPage(page - 1)}>
              Previous
            </button>
          )}
          {page < totalPages && (
            <button className="btn btn-secondary" onClick={() => setPage(page + 1)}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;
