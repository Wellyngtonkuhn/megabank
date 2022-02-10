import { Container, Row, Col, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCreditCard, faMobile, faShoppingCart, faWallet } from "@fortawesome/free-solid-svg-icons";

import './cartao.scss';


import cartao from '../../assets/cartao.svg'

export default function Cartao(){

    return (
      <Container className="mt-lg-5" >
        <Row>
          <Col xs={12} lg={7} className='mb-5 mb-lg-0 px-5 px-lg-0'>
            <Row>
                <h2 className="my-5 credit-card-title">Cartão de crédito</h2>
            </Row>
            <Row>
                <Col xs={12} lg={6} className='mb-4'>
                    <Row>
                        <Col xs={2} className='d-flex justify-content-center'>
                            <FontAwesomeIcon 
                                icon={faCreditCard}
                                size='2x'
                                color="#f05656"
                            />
                        </Col>
                        <Col xs={10} className='h5 text-muted mb-0'>
                            Crédito Pessoal
                        </Col>
                    </Row>
                </Col>

                <Col xs={12} lg={6} className='mb-4'>
                    <Row>
                        <Col xs={2} className='d-flex justify-content-center'>
                            <FontAwesomeIcon 
                                icon={faMobile}
                                size='2x'
                                color="#f05656"
                            />
                        </Col>
                        <Col xs={10} className='h5 text-muted mb-0'>
                            APP
                        </Col>
                    </Row>
                </Col>

                <Col xs={12} lg={6} className='mb-4'>
                    <Row>
                        <Col xs={2} className='d-flex justify-content-center'>
                            <FontAwesomeIcon 
                                icon={faShoppingCart}
                                size='2x'
                                color="#f05656"
                            />
                        </Col>
                        <Col xs={10} className='h5 text-muted mb-0'>
                            Pagamentos Online
                        </Col>
                    </Row>
                </Col>

                <Col xs={12} lg={6} className='mb-4'>
                    <Row>
                        <Col xs={2} className='d-flex justify-content-center'>
                            <FontAwesomeIcon 
                                icon={faWallet}
                                size='2x'
                                color="#f05656"
                            />
                        </Col>
                        <Col xs={10} className='h5 text-muted mb-0'>
                            Carteira Digital
                        </Col>
                    </Row>
                </Col>
   
            </Row>
          </Col>
          <Col xs={12} lg={5}>
            <Image src={cartao} alt="Magbank Credit Card Exemple" fluid />
          </Col>
        </Row>
      </Container>
    );
}











