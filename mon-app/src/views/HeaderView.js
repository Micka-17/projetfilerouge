import React, { useState } from "react";
import Axios from "axios";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import Logout from "../components/Log/Logout.js";
import { useNavigate } from "react-router-dom";
//import logo from "../assets/small_logo.png";

function Header() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const clickHandler = (event) => {
    setClicked(true);
    Logout(navigate, clicked);
  };
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isAdmin: "",
    avatar: "",
  });
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    const user = Axios({
      method: "get",
      url: "http://localhost:3001/api/auth/account",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    user.then((result) => {
      setUserInfo(result.data);
      setLoaded(true);
    });
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/accueil">logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/accueil">Accueil</Nav.Link>
          {token ? (
            <Nav.Link href="/profil">Profil</Nav.Link>
          ) : (
            <Nav.Link href="/inscription">Inscription</Nav.Link>
          )}
          {userInfo.isAdmin && (
            <NavDropdown title="Espace admin" id="basic-nav-dropdown">
              <NavDropdown.Item href="/admin/usermanagement">
                Gestion des utilisateurs
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/statistiques">
                Statistiques
              </NavDropdown.Item>
            </NavDropdown>
          )}
          {userInfo.isModo ? (
            <Nav.Link href="/moderateur">Espace modérateur</Nav.Link>
          ) : null}
          <Nav.Link href="/ressources">Ressources</Nav.Link>
          <Nav.Link href="/filtre">Filtre</Nav.Link>
          {token ? (
            <Nav.Link href="" onClick={clickHandler}>
              Se déconnecter
            </Nav.Link>
          ) : (
            <Nav.Link href="/">Se connecter</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
