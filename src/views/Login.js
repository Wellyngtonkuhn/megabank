import { Link } from 'react-router-dom'

import { Row, Col, Form, Image, Button } from 'react-bootstrap'

import logo from '../assets/megaBankLogo.svg'

import './scss/Login.scss'


export default function Login(){


    return (
      <>
        <section className="login">
          <div className="login-container">
            <Row>
              <Col className="text-center text-light">
                <Image src={logo} alt="logo magbank" className="mb-5" />
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='lead'>
                      <b>Número da Conta</b>
                    </Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='lead'>
                      <b>Senha</b>
                    </Form.Label>
                    <Form.Control type="password" />
                  </Form.Group>
                  <Link to='/dashboard'>
                    <Button className='mt-3' variant="success" type="submit">
                      Criar Conta
                    </Button>
                  </Link>
                </Form>
              </Col>
            </Row>
          </div>
        </section>
      </>
    );
}