import React, { useEffect, useState } from 'react'

const Child = () => {
    const [users, setUsers] = useState([]);
    const [send, setSend] = useState(false);

    useEffect(()=>{
        send &&
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .then(()=>setSend(false));

    },[send]);
  return (
   <React.Fragment>
        <div>
            <button onClick={()=>setSend(true)}>Click</button>
            {users.map((user) => <li key={user.id}>{user.email}</li>)}
        </div>
   </React.Fragment>
  )
}

export default Child