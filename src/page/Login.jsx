import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="password" placeholder="Password" />
        <button>Login</button>
        <p>Error! username or password is not defined</p>
        <span>
          Don't you have an account ? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}
export default Login;
