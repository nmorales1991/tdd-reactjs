import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Substract from './Substract';

function App() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => axios.get('https://jsonplaceholder.typicode.com/users');
    fetchUsers().then((data) => {
      setUsers(data.data);
    });
  }, []);

  return (
    <div>
      <h1>Hola React</h1>
      <p>Estamos aprendiendo a hacer tests en React</p>
      <label htmlFor="nombre">Nombre</label>
      <input id="nombre" type="text" />
      <ul>
        {
          users.map((user) => <li key={user.id}>{user.name}</li>)
        }
      </ul>
      <button type="button" onClick={() => setCount(count + 1)}>ADD</button>
      <span>Clicked {count} times</span>
      <Substract count={count} setCount={setCount} />
    </div>
  );
}

export default App;
