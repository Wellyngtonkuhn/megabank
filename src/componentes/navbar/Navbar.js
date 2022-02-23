import { Link, useNavigate } from "react-router-dom";

import { Navbar, Nav, NavDropdown, Container, ButtonGroup, Button } from "react-bootstrap"
import logo from '../../assets/megaBankLogo.svg'

import "./Navbar.scss"


export default function Menu({handleCreateAcc, logged, auth}) {
    const history = useNavigate()
    const handleClick = () =>{
      auth.logOut(()=>history.push('/'))
    }

    return (
      <>
        <Navbar variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#">
              <Link to="/">
                <img
                  src={logo}
                  height="30"
                  className="d-inline-block align-top"
                  alt="MegaBank"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "120px" }}
                navbarScroll
              >
                <Nav.Link href="#cartao">Cartão</Nav.Link>
                <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
                <Nav.Link href="#faq">FAQ</Nav.Link>
              </Nav>

              {logged && (
                <>
                  <Button variant="outline-light" onClick={handleClick}>
                    Sair
                  </Button>
                </>
              )}

              {!logged && (
                <>
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="outline-light">
                      <NavDropdown
                        title="Acessar minha conta"
                        id="basic-nav-dropdown"
                      >
                        <NavDropdown.Item>
                          <Link to="/login">Pessoa Física</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <Link to="/login">Pessoa Jurídica</Link>
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Button>
                    <Button variant="outline-light" onClick={handleCreateAcc}>
                      Abra sua conta
                    </Button>
                  </ButtonGroup>
                </>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
}