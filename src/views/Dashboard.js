import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import ContaCorrente from "../componentes/dashboard/ContaCorrente";
import Pagamentos from "../componentes/dashboard/Pagamentos";
import Extrato from "../componentes/dashboard/Extrato";

import "./scss/Dashboard.scss";

export default function DashBoard({ name, conta }) {

  const data = {
    lastedDate: [
      { date: "22/07", description: "Saque 24h 012345", value: "300,00" },
      { date: "05/08", description: "Supermercado 2345", value: "350,00" },
      { date: "15/10", description: "Netflix 010245", value: "50,00" },
      { date: "22/07", description: "Farmácia 54782345", value: "500,00" },
    ],

    futureDate: [
      { date: "07/10", description: "Carro 2345", value: "1250,00" },
      { date: "15/12", description: "Netflix 010245", value: "50,00" },
      { date: "22/07", description: "Farmácia 54782345", value: "500,00" },
    ],
    extrato: [
      { date: "07/10", description: "Carro 2345", value: "1250,00" },
      { date: "15/12", description: "Netflix 010245", value: "50,00" },
      { date: "22/07", description: "Farmácia 54782345", value: "500,00" },
      { date: "22/07", description: "Saque 24h 012345", value: "300,00" },
      { date: "05/08", description: "Supermercado 2345", value: "350,00" },
      { date: "15/10", description: "Netflix 010245", value: "50,00" },
      { date: "22/07", description: "Farmácia 54782345", value: "500,00" },
    ],
  };

  const [activeLink, setActiveLink] = useState(0);

  const link = [
    { text: "Minha Conta", path: "/dashboard" },
    { text: "Pagamentos", path: "/dashboard/pagamentos" },
    { text: "Extrato", path: "/dashboard/extrato" },
  ];

  function handleLink(item, key) {
    return (
      <>
        <Link to={item.path} key={key}>
          <Button
            className={`dashboard-button ${
              key === activeLink ? "ativo" : ""
            } mb-1`}
            variant="link"
            block
            size="lg"
            onClick={() => setActiveLink(key)}
          >
            {item.text}
          </Button>
        </Link>
      </>
    );
  }

  return (
    <>
      <Container className="py-5 dashboard">
        <Row>
          <Col xs={12} lg={4}>
            <Row className="align-items-center mb-5">
              <Col xs={3}>
                <span className="user-avatar">
                  <FontAwesomeIcon
                    className="icon-circle"
                    icon={faCircle}
                    size="5x"
                  />
                  <FontAwesomeIcon
                    className="icon-user"
                    icon={faUser}
                    size="3x"
                  />
                </span>
              </Col>
              <Col xs={9}>
                <h2 className="user-name">{name}</h2>
                <p className="text-muted">{conta}</p>
              </Col>
            </Row>
            <Row>{link.map(handleLink)}</Row>
          </Col>
          <ContaCorrente data={data} />
          <Pagamentos />
          <Extrato data={data} />
        </Row>
      </Container>
    </>
  );
}
