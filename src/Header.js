import ReactLogo from "./stackline_logo.svg";

function Header() {
  return (
    <nav className="navbar">
      <a class="navbar-brand" href="/#">
        <img src={ReactLogo} alt="Stackline logo" width="30" height="24" />
      </a>
    </nav>
  );
}
export default Header;
