

import { Container, Row, Col, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons"

import './scss/Dashboard.scss'

export default function DashBoard(){
    

    return(
        <>
        <Container className='py-5 dashboard'>
            <Row>
                <Col xs={12} lg={4}>
                    <Row className='align-items-center mb-5'>
                        <Col xs={3}>
                            <span className="user-avatar">
                                <FontAwesomeIcon className='icon-circle' icon={faCircle} size='5x'/>
                                <FontAwesomeIcon className='icon-user' icon={faUser} size='3x' />
                            </span>
                        </Col>
                        <Col xs={9}>
                            <h2 className="user-name">Felipe Campos</h2>
                            <p className="text-muted">ag: 1234 c/c: 4321-5</p>
                        </Col>
                    </Row>
                    <Row >
                        <Button className="dashboard-button active" variant="link" size="lg">
                            Minha Conta
                        </Button>
                        <Button className="dashboard-button" variant="link" size="lg">
                            Pagamentos
                        </Button>
                        <Button className="dashboard-button" variant="link" size="lg">
                            Extrato
                        </Button>
                    </Row>

                </Col>

                <Col xs={12} lg={3} className='my-lg-5 pt-lg-5'>
                    <h3 className="user-content my-5">Conta corrente</h3>
                    <h6 className="user-content">
                        <b>Saldo em conta corrente</b>
                    </h6>
                    <h4 className="user-content mb-4 text-success">
                        <small>R$ </small>3.500<small>,00</small>
                    </h4>
                    <h6 className="user-content my-3">
                        <b>Cheque especial</b>
                    </h6>
                    <p className="mb-0">Limite disponível</p>
                    <p className="mb-4">R$ 5.000,00</p>
                    <Button variant="secondary">Ver extrado</Button>
                </Col>

                <Col className="bg-dark" xs={12} lg={5}></Col>
            </Row>
        </Container>       
        </>
    )
}