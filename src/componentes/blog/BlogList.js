import { Container, Row, Col, Button, Card } from "react-bootstrap"
import blogUm from '../../assets/blog_1.svg'
import blogDois from '../../assets/blog_2.svg'
import blogTres from '../../assets/blog_3.svg'

export default function BlogList(){


    return (
      <>
        <Container className="my-5">
          <Row>
            <Col xs={12} md={6} lg={4}>
              <Card className="mx-auto my-3">
                <Card.Img variant="top" src={blogUm} alt="imagem do blog" />
                <Card.Body>
                  <Card.Title style={{ overflow: "hidden" }}>
                    Lorem Title
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="danger">Peça já</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <Card className="mx-auto my-3">
                <Card.Img variant="top" src={blogDois} alt="imagem do blog" />
                <Card.Body>
                  <Card.Title style={{ overflow: "hidden" }}>
                    Lorem Title
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="danger">Peça já</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <Card className="mx-auto my-3">
                <Card.Img variant="top" src={blogTres} alt="imagem do blog" />
                <Card.Body>
                  <Card.Title style={{ overflow: "hidden" }}>
                    Lorem Title
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="danger">Peça já</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
}