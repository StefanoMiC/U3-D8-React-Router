import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import menu from "../data/menu.json";

const Menu = () => {
  return (
    <Container className="mt-5">
      {menu.map(pasta => (
        <Row className="justify-content-center" key={pasta.id}>
          <Col xs={12} md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Link to={"/detail/" + pasta.id}>
                  <Card.Img variant="top" src={pasta.image} className="mb-3" />
                </Link>
                <Card.Title>
                  <Link to={"/detail/" + pasta.id} className="text-dark text-decoration-none">
                    {pasta.name}
                  </Link>
                </Card.Title>
                <Card.Text>{pasta.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Badge bg="danger">{pasta.label}</Badge>
                <Badge bg="success">{pasta.price}</Badge>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Menu;
