import { useState } from "react";


import { Col, Container, Row, Accordion, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faMobile, faUserTie, faShield } from "@fortawesome/free-solid-svg-icons";
import magBank from '../../assets/magBank.png'
import appStore from '../../assets/appStore.jpg'
import googlePlay from '../../assets/googlePlay.jpg'
import facebook from '../../assets/facebook.jpg'
import twitter from '../../assets/twitter.jpg'
import youtube from '../../assets/youtube.jpg'

import './footer.scss'



export default function Footer(){

    const options = [
      {icone: faCreditCard, text: 'Cartão de crédito e débito'},
      {icone: faMobile, text: 'Conta e abertura'},
      {icone: faShield, text: 'Token digital'},
      {icone: faUserTie, text: 'Produtos e serviços'},
    ]

    const [index, setIndex] = useState(0)


    return (
      <>
        <Container fluid className="bg-dark pt-5 text-white">
          <Container>
            <h2 className="text-center footer-title">Dúvidas frequentes</h2>
            <Row className="py-lg-5">
              <Col
                xs={12}
                className="d-lg-none d-flex justify-content-evenly pt-4"
              >
                {options.map(({ icone }, key) => (
                  <Row>
                    <Col key={key}>
                      <FontAwesomeIcon
                        icon={icone}
                        size="xl"
                        onClick={() => setIndex(key)}
                      />
                    </Col>
                  </Row>
                ))}
              </Col>

              <Row className="text-center pt-4 d-lg-none">
                  <p className="lead">{options[index].text}</p>
              </Row>

              <Col lg={5} className="d-none d-lg-block">
                {options.map(({ icone, text }, key) => (
                  <Row className="pt-3" key={key} onClick={() => setIndex(key)}>
                    <Col xs={1} lg={1}>
                      <FontAwesomeIcon
                        className="clickable-icon"
                        icon={icone}
                        size="xl"
                      />
                    </Col>
                    <Col xs={11} col={11}>
                      <p className="clickable-icon icon-text">{text}</p>
                    </Col>
                  </Row>
                ))}
              </Col>

              <Col xs={12} lg={7} className="pt-3">
                <Accordion defaultActiveKey="0" activeKey={`${index}`}>
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
                  <Accordion.Item eventKey="2">
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
                </Accordion>
              </Col>
            </Row>
          </Container>
        </Container>

        <Container className="py-5">
          <Row className="align-items-center text-center">
            <Col className='px-lg-0' xs={12} lg={6}>
              <Image src={magBank} alt="magBnak" />
            </Col>
            <Col className="py-4" xs={12} lg={4}>
              <Image src={appStore} alt="appStore" />
              <Image className="px-lg4" src={googlePlay} alt="googlePlay" />
            </Col>
            <Col className='px-lg-0' xs={12} lg={2}>
              <Image src={facebook} alt="facebook" />
              <Image className="px-4" src={twitter} alt="twitter" />
              <Image src={youtube} alt="youtube" />
            </Col>
          </Row>
        </Container>
      </>
    );
}