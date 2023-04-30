import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "./style.css";

const Forma = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // storing input name
    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("password", JSON.stringify(password));
  }, [username, password]);

  return (
    <div className="forma">
      <h1>Здрасвуйте! Пройдите авторизацию.</h1>

      <Formik
        className="input"
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Введите пароль!";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Введите корректый адрес";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            localStorage.setItem("username", values.email);
            localStorage.setItem("password", values.password);
            setSubmitting();
            return navigate("/home");
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="login-box">
            <div className="user-box">
              <Field type="email" name="email" className="" />
              <ErrorMessage
                name="email"
                component="div"
                className="error_email"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="user-box">
              <Field type="password" name="password" />
              <ErrorMessage
                name="password"
                component="div"
                className="error_password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Forma;
