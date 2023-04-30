import { useParams } from "react-router-dom";
import { useEffect } from "react";

import "../Forma/style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../Posts/PostsSlice";
import MyComponent from "./BackButton";

function PostsDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts(id));
  }, [dispatch, id]);

  return (
    <>
      <MyComponent />
      <div className="newPage">
        <h1>{posts && JSON.stringify(posts.id, 2, 2)}</h1>
        <h2>{posts && JSON.stringify(posts.title, 2, 2)} </h2>
        <p>{posts && JSON.stringify(posts.body, 2, 2)}</p>
      </div>
    </>
  );
}

export default PostsDetail;
