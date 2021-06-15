import React, { useState, useEffect } from "react";
import axios from "axios";

const Display = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((all_posts) => {
        console.log(all_posts);
        setPosts(all_posts.data);
      })
      .catch((err) => console.log(err.msg));
  }, []);
  return (
    <>
      <table>
        <tbody>
          {posts.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Display;
