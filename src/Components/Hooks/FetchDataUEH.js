import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchDataUEH() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch(console.log("err"));
  }, []);

  return (
    <div>
      <ul>
        {posts.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default FetchDataUEH;
