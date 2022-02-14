import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import ButtonComponent from '../button/ButtonComponent'

import './Banner.scss'

import banner_logo from '../../assets/banner_logo.png'
import banner_logo_mobile from '../../assets/banner_logo_mobile.png'

export default function Banner({handleCreateAcc}){
    

    return(
        <>
        <Container fluid className="text-white banner text-center">
            <Row className='py-lg-5' >
                <Col lg className="my-lg-5 banner_col_esquerda" >
                    <Image className='d-lg-none' src={banner_logo_mobile} alt='banner' />
                    <Image className='d-none d-lg-inline-block' src={banner_logo} alt='banner' />
                </Col>
                <Col lg className="my-lg-5 banner_col_direita" >
                    <p>Pague suas contas pelo nosso APP</p>
                    <Button className='btn bannerBtn' variant='outline-light' onClick={handleCreateAcc}>Abra sua conta</Button>
                </Col>
            </Row>
        </Container>      
        </>
    )
} 