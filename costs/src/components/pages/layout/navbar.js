import { Link } from "react-router-dom";

import Container from "./Container";

import Styles from "./navbar.module.css";
import logo from "../../../img/costs_logo.png";

function Navbar() {
  return (
    <nav className={Styles.navbar}>
      <img src={logo} alt="costs" />
      <Container>
        <Link to="/"></Link>
        <ul className={Styles.list}>
          <li class={Styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={Styles.item}>
            <Link to="/projects">Projetos</Link>
          </li>

          <li className={Styles.item}>
            <Link to="/contact">Contato</Link>
          </li>
          <li className={Styles.item}>
            <Link to="/company">Empresa</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
