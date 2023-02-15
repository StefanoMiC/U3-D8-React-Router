import { Row, Col, ListGroup, Badge } from "react-bootstrap";
const DishComments = ({ selectedPasta, className, width }) => (
  <Row className={className}>
    <Col xs={12} md={width}>
      {/* <h4>Recensioni per {this.state.selectedPasta.name}</h4> */}
      <ListGroup>
        {/* lo short circuit farà sì che comments non venga letto prima che selectedPasta esista e sia un oggetto */}
        {selectedPasta ? (
          selectedPasta.comments.map(elem => (
            <ListGroup.Item key={`comment-${elem.id}`}>
              <Badge bg="dark" className="me-2">
                {elem.author}
              </Badge>
              {elem.comment}
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item> Nessun elemento da visualizzare, clicca su un elemento del carosello</ListGroup.Item>
        )}
      </ListGroup>
    </Col>
  </Row>
);

export default DishComments;
