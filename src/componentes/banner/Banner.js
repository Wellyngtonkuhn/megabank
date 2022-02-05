import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap'


import './Banner.scss'

import banner_logo from '../../assets/banner_logo.png'
import banner_logo_mobile from '../../assets/banner_logo_mobile.png'

export default function Banner(){


    return(
        <>
        <Container fluid className="text-white banner text-center">
            <Row className='py-lg-5' >
                <Col lg className="my-lg-5" >
                    <Image className='d-lg-none' src={banner_logo_mobile} alt='banner' />
                    <Image className='d-none d-lg-inline-block' src={banner_logo} alt='banner' />
                </Col>
                <Col lg className="my-lg-5 banner_col_direita" >
                    <p>Pague suas contas pelo nosso APP</p>
                    <Button className=' btn bannerBtn' variant='outline-light'>Abra sua conta</Button>
                </Col>
            </Row>
        </Container>      
        </>
    )
} 