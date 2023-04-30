import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Forma/style.css";

const routes = [
  {
    path: "/main",
    label: "Main",
    id: 1,
  },
  {
    path: "/about",
    label: "About",
    id: 2,
  },
  {
    path: "/users",
    label: "Users",
    id: 3,
  },
];
function Header() {
  const location = useLocation();

  return (
    <div className="header">
      {routes.map(({ id, path, label }) => {
        return (
          <Link state={{ from: location.pathname }} to={path} key={id}>
            <div className="bar"> {label}</div>
          </Link>
        );
      })}
      <hr />
    </div>
  );
}

export default Header;
