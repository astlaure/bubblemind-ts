import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Entity } from '../../interfaces/entity.interface';

const AdminDashboard = () => {
  const [entities, setEntities] = useState<Entity[]>([]);

  useEffect(() => {
    setEntities([
      { name: 'users' },
      { name: 'movies' },
    ]);
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {entities.map((entity, index) => {
          return (
            <li key={index}>
              <Link to={`/admin/${entity.name}`}>{entity.name}</Link>
              <ul>
                <li>Create</li>
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default AdminDashboard;
