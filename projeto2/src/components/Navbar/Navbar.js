import './Navbar.css';
import logo from "./steam-logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container navbar-content">
        <a href="/">
          <img src={logo} alt="" width="60" height="60" />
        </a>
        <div className="navbar-menu">
          <ul>
            <a href="/profile">
              <li>Perfil</li>
            </a>
            <a href="/wishlist">
              <li>Lista de Desejos</li>
            </a>
            <a href="/login">
              <li>Login</li>
            </a>
            <a href="/register">
              <li>Registrar</li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
