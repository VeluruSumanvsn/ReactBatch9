import React, { useEffect, useState } from 'react'

const Table = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setPosts(data));

    },[]);
  return (
   <React.Fragment>
        <div>
            {posts.map((post) => <li key={post.id}>{post.title}</li>)},
            {posts.map((post) => <li key={post.id}>{post.userId}</li>)}
        </div>
   </React.Fragment>

     
    )
}
export default Table;