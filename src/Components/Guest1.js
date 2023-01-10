import React, { useEffect, useState } from 'react'

const Guest1= () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data));

    },[]);
  return (
   <React.Fragment>
        <div>
            {users.map((user) => <li key={user.id}>{user.email}</li>)}
        </div>
   </React.Fragment>
  )
}

export default Guest1