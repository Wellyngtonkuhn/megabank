

import { Col, Button, Tabs, Tab, Form } from "react-bootstrap"


export default function Pagamentos(){



    return (
      <>
        <Col xs={12} lg={8} className="my-lg-5 pt-lg-5">
          <h2 className="mt-5">Pagamentos</h2>
          <Tabs defaultActiveKey="boleto" className="mt-5 pt-lg-5">
            <Tab className="tab-title" eventKey="boleto" title="Boleto">
              <Form>
                <Form.Group className="my-4" controlId="formBarCode">
                  <Form.Label>Código de barras</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Insira o código de barras"
                  />
                </Form.Group>

                <Form.Group controlId="formPagamentoTipo">
                  <Form.Label>Forma de Pagamento</Form.Label>
                  <div className="d-flex mt-1 mb-4">
                    <Form.Check
                      type="radio"
                      id="debito"
                      label="Débito em Conta Corrente"
                      name="metodoDePagamento"
                    />
                    <Form.Check
                      type="radio"
                      id="cartao"
                      className="ml-3"
                      label="Cartão de Crédito"
                      name="metodoDePagamento"
                    />
                  </div>
                </Form.Group>
                <Button className="btn-success">Continuar</Button>
              </Form>
            </Tab>

            <Tab
              className="tab-title"
              eventKey="transferencia"
              title="Transferência"
            ></Tab>
          </Tabs>
        </Col>
      </>
    );
}