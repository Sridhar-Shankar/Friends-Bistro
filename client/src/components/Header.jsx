import logo from "../assets/logo.jpg";
import Button from "./UI/Button";

function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Restaurant-Logo" />
        <h1>Friend's Bistro</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
}

export default Header;
