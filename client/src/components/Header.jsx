import logo from "../assets/logo.jpg";

function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Restaurant-Logo" />
        <h1>Friend's Bistro</h1>
      </div>
      <nav>
        <button>Cart (0)</button>
      </nav>
    </header>
  );
}

export default Header;
