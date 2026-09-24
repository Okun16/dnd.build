import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="brand">
        <img src={logo} alt="" className="logo" />
        <span className="brand-name">dnd.build</span>
      </NavLink>

      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/new-build">New Build</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>

      <div className="user">
        <NavLink to="/login">Log in</NavLink>
        <NavLink to="/signup" className="signup">Sign up</NavLink>
      </div>
    </header>
  );
}