import ReactLogo from "./stackline_logo.svg";
import "./header.css";
function Header() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/#">
        <img src={ReactLogo} alt="Stackline logo" width="30" height="24" />
      </a>
    </nav>
  );
}
export default Header;
