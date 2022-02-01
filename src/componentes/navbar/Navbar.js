import { Navbar, Nav, NavDropdown, Container, ButtonGroup, Button } from "react-bootstrap"
import logo from '../../assets/megaBankLogo.svg'

import "./Navbar.scss"


export default function Menu() {

    return (
        <>
            <Navbar variant= 'dark' expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                    <img
                        src={logo}
                        height="30"
                        className="d-inline-block align-top"
                        alt="MegaBank"
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '120px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#cartao">Cartão</Nav.Link>
                            <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
                            <Nav.Link href="#faq">FAQ</Nav.Link>
                        </Nav>    
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="outline-light">
                            <NavDropdown title="Acessar minha conta" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                            </NavDropdown>
                            </Button>
                            <Button variant="outline-light">Abra sua conta</Button>
                        </ButtonGroup>                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}