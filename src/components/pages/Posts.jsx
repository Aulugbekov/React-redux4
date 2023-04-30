import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../Posts/PostsSlice";
import { Link, useNavigate } from "react-router-dom";
import "../Forma/style.css";

export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let content;

  if (status === "loading") {
    content = <div>Loading...</div>;
  } else if (status === "succeeded") {
    content =
      posts.length > 0 ? posts.map((user) => <div key={user.id}></div>) : null;
  } else if (status === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <div className="users">
      <h2>Users</h2>

      {posts.map((item) => {
        return (
          <div className="user" key={item.id}>
            <span>
              <h1>{item.id}</h1>
              <h2>{item.title}</h2>
              <div>
                {item.body.slice(0, 20)}...
                <Link to={`/users/${item.id}`}>learn more</Link>
              </div>
              ;
            </span>
            <p>{content}</p>

            <button onClick={() => navigate(`/users/${item.id}`)}>MORE</button>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
