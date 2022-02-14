import { Modal, Button, Form } from "react-bootstrap";


export default function AccountModal({show, handleClose}){

    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Abra sua conta</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Seu nome</Form.Label>
                <Form.Control type="text" placeholder="seu nome" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Seu email</Form.Label>
                <Form.Control type="email" placeholder="seu email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCity">
                <Form.Label>Sua cidade</Form.Label>
                <Form.Control as="select">
                  <option value="1">São Paulo</option>
                  <option value="2">Rio de Janeiro</option>
                  <option value="3">Salvador</option>
                </Form.Control>
              </Form.Group>

              <Form.Check
                type="checkbox"
                id="custom-checkbox"
                label="Eu li e concordo com os termos de uso."
              />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Criar Conta
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}