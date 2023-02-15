import { useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import menu from "../data/menu.json";
import DishComments from "./DishComments";

// lo STATE è utilizzabile anche in componenti a Funzione!

const Home = () => {
  const [selectedPasta, setSelectedPasta] = useState(null);

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6} className="text-center">
          <h1>Benvenuti nel nostro Ristorante</h1>
          <p>Abbiamo primi piatti, primi piatti o primi piatti...</p>

          <Carousel>
            {menu.map(pasta => (
              <Carousel.Item
                key={pasta.id}
                onClick={e => {
                  console.log("clicked", pasta.name, e);
                  setSelectedPasta(pasta);
                }}
              >
                <img className="d-block w-100" src={pasta.image} alt={pasta.name} />
                <Carousel.Caption>
                  <h3>{pasta.name}</h3>
                  <p>{pasta.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      {/* short circuit operator, se il valore a sinistra del && è falsy quello che c'è a destra non verrà eseguito*/}
      <DishComments selectedPasta={selectedPasta} className="justify-content-center mt-5" width="6" />
      {/* <ClassComponent batch="FS0822-React" /> */}
    </Container>
  );
};

export default Home;
