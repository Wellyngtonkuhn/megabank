import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Row, Col, Form, Image, Button } from 'react-bootstrap'

import logo from '../assets/megaBankLogo.svg'

import './scss/Login.scss'


export default function Login({ auth }){

  const [name, setName] = useState()
  const [conta, setConta] = useState()

  const history = useNavigate()

  const handleSubmit = () =>{
    auth.login(name, conta, history.push('/dashboard'))
  }


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
                      <b>Nome Completo</b>
                    </Form.Label>
                    <Form.Control type="text" value={name} onChange={(e)=>setName(e.currentTarget.value)} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='lead'>
                      <b>Número da Conta</b>
                    </Form.Label>
                    <Form.Control type="number" value={conta} onChange={(e)=>setConta(e.currentTarget.value)} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='lead'>
                      <b>Senha</b>
                    </Form.Label>
                    <Form.Control type="password" />
                  </Form.Group>
                    <Button className='mt-3' variant="success" type="submit" onClick={handleSubmit}>
                      Criar Conta
                    </Button>
                </Form>
              </Col>
            </Row>
          </div>
        </section>
      </>
    );
}