import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const response = await fetch(
      "https://i-notebook-server.vercel.app/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (response.status === 200 && response.ok === true) {
      // save authToken and redirect
      localStorage.setItem("token", json.authToken);
      navigate("/");
      props.showAlert("Logged in successfully.", "success");
    } else {
      props.showAlert("Invalid credentials.", "danger");
    }
  };
  const onChange = (ev) => {
    setCredentials({ ...credentials, [ev.target.name]: ev.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <h2>Log in to your account</h2>
      <div className="mb-3 mt-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          onChange={onChange}
          type="email"
          name="email"
          value={credentials.email}
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          required
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          onChange={onChange}
          type="password"
          name="password"
          value={credentials.password}
          className="form-control"
          id="password"
          required
        />
      </div>

      <div className="fw-light">
        <span>Don't have an account yet?</span>
        <Link to={"/signup"} className="ms-1">
          Signup
        </Link>
      </div>

      <button type="submit" className="btn btn-primary mt-3">
        Login
      </button>
    </form>
  );
};

export default Login;
