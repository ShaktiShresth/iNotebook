import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userCredentials.name,
        email: userCredentials.email,
        password: userCredentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (response.status === 200 && response.ok === true) {
      // save authToken and redirect
      localStorage.setItem("token", json.authToken);
      navigate("/");
      props.showAlert("Your account has been created successfully.", "success");
    } else {
      props.showAlert("Invalid details.", "danger");
    }
  };

  const onChange = (ev) => {
    setUserCredentials({
      ...userCredentials,
      [ev.target.name]: ev.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <h2>Create your account</h2>
      <div className="mb-3 mt-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={onChange}
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={userCredentials.name}
          placeholder="e.g. John Doe"
          minLength={3}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          onChange={onChange}
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={userCredentials.email}
          aria-describedby="emailHelp"
          placeholder="e.g. johndoe@gmail.com"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          onChange={onChange}
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={userCredentials.password}
          placeholder="Your Password"
          minLength={5}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cpassword" className="form-label">
          Confirm password
        </label>
        <input
          onChange={onChange}
          type="password"
          className="form-control"
          id="cpassword"
          name="cpassword"
          value={userCredentials.cpassword}
          placeholder="Confirm your password"
          minLength={5}
          required
        />
      </div>
      <div className="fw-light">
        <span>Already have an account?</span>
        <Link to={"/login"} className="ms-1">
          Login
        </Link>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Signup
      </button>
    </form>
  );
};

export default Signup;
