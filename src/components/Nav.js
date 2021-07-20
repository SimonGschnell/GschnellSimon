import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../style/nav.css";
//const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

let Navigation = () => {
  let location = useLocation();
  const [activeLink, changeActiveLink] = useState();

  return (
    <Nav
      variant='pills'
      activeKey='1'
      style={{ fontSize: "1.3rem" }}
      className='p-3 justify-content-center'
    >
      <Nav.Item>
        <Link
          to='/'
          className={`${
            location.pathname === "/" ? "activeNavigation" : ""
          } nav-link text-white`}
          role='button'
        >
          Home
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          to='/about'
          className={`${
            location.pathname === "/about" ? "activeNavigation" : ""
          } nav-link text-white`}
          role='button'
        >
          About
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          to='/projects'
          className={`${
            location.pathname.match(/^\/projects/g) ? "activeNavigation" : ""
          } nav-link text-white`}
          role='button'
        >
          Projects
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          to='/contact'
          className={`${
            location.pathname === "/contact" ? "activeNavigation" : ""
          } nav-link text-white`}
          role='button'
        >
          Contact
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          to='/api'
          className={`${
            location.pathname === "/api" ? "activeNavigation" : ""
          } nav-link text-white`}
          role='button'
        >
          Api's
        </Link>
      </Nav.Item>
    </Nav>
  );
};
export default Navigation;
