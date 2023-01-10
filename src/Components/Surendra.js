import React, { useEffect, useState } from 'react'

const Surendra = () => {
    const [surendra, setsurendra] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then((response) => response.json())
        .then((data) => setsurendra(data));

    },[]);
  return (
   <React.Fragment>
        <div>
            {surendra.map((user) => <li key={user.id}>{user.id}</li>)}
            {surendra.map((user) => <li key={user.id}>{user.name}</li>)}
            {surendra.map((user) => <li key={user.id}>{user.email}</li>)}
            {surendra.map((user) => <li key={user.id}>{user.body}</li>)}
           
        </div>
   </React.Fragment>
  )
}

export default Surendra