import { Col, Container, Row, Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faMobile, faUserTie, faShield } from "@fortawesome/free-solid-svg-icons";

import './footer.scss'



export default function Footer(){


    return (
      <>
        <Container fluid className="bg-dark pt-5 text-white">
          <Container>
            <h2 className="text-center footer-title">Dúvidas frequentes</h2>
            <Row className="py-lg-5">
              <Col xs={12} lg={5}>
                <Row className="mt-5">
                  <Col xs={1} lg={1}>
                    <FontAwesomeIcon icon={faCreditCard} size="lg" />
                  </Col>
                  <Col xs={11} col={11}>
                    <p className="icon-text">Cartão de crédito e débito</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={1} lg={1}>
                    <FontAwesomeIcon icon={faMobile} size="lg" />
                  </Col>
                  <Col xs={11} col={11}>
                    <p className="icon-text">Conta e abertura</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={1} lg={1}>
                    <FontAwesomeIcon icon={faShield} size="lg" />
                  </Col>
                  <Col xs={11} col={11}>
                    <p className="icon-text">Token digital</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={1} lg={1}>
                    <FontAwesomeIcon icon={faUserTie} size="lg" />
                  </Col>
                  <Col xs={11} col={11}>
                    <p className="icon-text">Produtos e serviços</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={7} className='py-4'>
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Lorem ipsum dolor it amet
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                    Lorem ipsum dolor it amet
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                    Lorem ipsum dolor it amet
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                    Lorem ipsum dolor it amet
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </Container>
      </>
    );
}