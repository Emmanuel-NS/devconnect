import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" end>Home</NavLink> |{" "}
      <NavLink to="/developers">Developers</NavLink> |{" "}
      <NavLink to="/blog">Blog</NavLink> |{" "}
      <NavLink to="/about">About</NavLink>
      <span style={{ float: "right" }}><DarkModeToggle /></span>
    </nav>
  );
}
