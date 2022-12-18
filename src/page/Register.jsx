import React from "react";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="Password" />
        <button>Register</button>
        <p>Error! can't register</p>
        <span>
          Don't you have an account ? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}
export default Register;
