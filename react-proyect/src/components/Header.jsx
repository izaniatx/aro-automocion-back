import logo from "../assets/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <nav className="custom-header navbar navbar-expand-lg shadow-sm p-3">
      <div className="container">

        {/* LOGO */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "60px" }}
            className="me-3"
          />
        </a>

        {/* BOTÓN MÓVIL */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAV ENLACES */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/servicios">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacto">Contacto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/DondeEncontrarnos">Donde Encontrarnos</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}
