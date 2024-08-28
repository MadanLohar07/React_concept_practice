import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchDataUEH2() {
  const [post, setPost] = useState({});

  const [id, setId] = useState(1);

  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => setPost(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  const clickHandler = () => {
    setIdFromButtonClick(id);
  };

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={clickHandler}>Fetch Post</button>
      <div>{post.title}</div>
    </div>
  );
}

export default FetchDataUEH2;
