import { Container, Row, Button } from "react-bootstrap"

export default function ButtonComponent({ children }){


    return(
        <>
        <Container>
            <Row className='d-flex justify-content-center'>
                <Button variant='success' className='my-5' size='lg'>{children}</Button>
            </Row>           
        </Container>
        </>
    )
}