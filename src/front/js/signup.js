import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./store/appContext";
export const SignUp = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [data, setData] = useState({ first_name: "" });
  function handleSubmit() {
    actions.signup(data);
    navigate("/login");
  }
  const handleOnClick = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);
  console.log(store.user);
  return (
    <div className="container w-50 pt-5">
      <form onSubmit={handleSubmit} className="bg-white mt-5 p-5">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            aria-label="First name"
            class="form-control"
            name="first_name"
            onChange={handleOnClick}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            aria-label="Last name"
            class="form-control"
            name="last_name"
            onChange={handleOnClick}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={handleOnClick}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={handleOnClick}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Keep me signed in
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
