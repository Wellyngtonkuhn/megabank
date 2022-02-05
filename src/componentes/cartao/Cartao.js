import { Container, Row, Col, Image } from "react-bootstrap"

import cartao from '../../assets/cartao.svg'

export default function Cartao(){

    return(
        <Container>
            <Row>
                <Col>
                    <h2>Cartão de crédito</h2>
                    <Row>
                        <Col>
                            <p>Crédito Pessoal</p>
                            <p>APP </p>
                        </Col>
                        <Col>
                            <p>Pagamentos  Online</p>
                            <p>Carteira Digital </p>
                        </Col>
                    </Row>
                
                </Col>
                <Col>
                <Image src={cartao} alt='' />
                
                </Col>
            </Row>
        
        
        
        </Container>
    )
}











