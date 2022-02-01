import { Card, Button } from 'react-bootstrap'

import './Banner.scss'
import banner from '../../assets/banner.jpg'

export default function Banner(){


    return(
        <>
        <Card className="banner text-white">
        <Card.Img src={banner} alt="banner image"/>
        <Card.ImgOverlay>
            <Card.Title>Pague suas contas pelo nosso APP</Card.Title>
            
            <Button variant="outline-light" className='bannerBtn'>Abra sua conta</Button>
        </Card.ImgOverlay>
        </Card>      
        </>
    )
} 