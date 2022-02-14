
import { Button, Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faMobileAlt ,faMobile, faGlobe, faShield } from "@fortawesome/free-solid-svg-icons"
import './institucional.scss'



export default function Institucional({ handleCreateAcc }){

    return (
      <section className="institucional text-light py-5 px-4">
        <Container>
          <Row>
            <Col xs={12} lg={5} />
            <Col xs={12} lg={7}>
              <h2 className="institucional-title my-5">Já nascemos digital</h2>
              <p className="mt-5 institucional-content">
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Proin eget tortor risus.Vestibulum ac diam sit amet quam
                vehicula elementum sed sit amet dui. Curabitur non nulla sit
                amet nisl tempus convallis quis ac lectus.
              </p>

              <Row className="mt-5">
                <Col xs={1} lg={1}>
                  <FontAwesomeIcon icon={faMobileAlt} size='lg'/>
                </Col>
                <Col xs={11} col={11}>
                  <p className="icon-text">Sem fila e sem burocracia</p>
                </Col>
              </Row>
              <Row>
                <Col xs={1} lg={1}>
                  <FontAwesomeIcon icon={faMobile} size='lg'/>
                </Col>
                <Col xs={11} col={11}>
                  <p className="icon-text">Simples e prático</p>
                </Col>
              </Row>
              <Row>
                <Col xs={1} lg={1}>
                  <FontAwesomeIcon icon={faGlobe} size='lg'/>
                </Col>
                <Col xs={11} col={11}>
                  <p className="icon-text">Simples e prático</p>
                </Col>
              </Row>
              <Row>
                <Col xs={1} lg={1}>
                  <FontAwesomeIcon icon={faShield} size='lg'/>
                </Col>
                <Col xs={11} col={11}>
                  <p className="icon-text">Transações mais seguras</p>
                </Col>
              </Row>
              <Button variant="outline-light" className="mt-5" onClick={handleCreateAcc}>
                Abra sua conta
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    );
}