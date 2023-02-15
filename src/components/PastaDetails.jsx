import { useEffect, useState } from "react";

import { Container, Row, Col, Spinner, Alert, Badge } from "react-bootstrap";
import menu from "../data/menu.json";
import { useParams } from "react-router-dom";
import DishComments from "./DishComments";

const PastaDetails = () => {
  const params = useParams();
  //   const navigate = useNavigate();
  console.log("PARAMS", params);

  const [pasta, setPasta] = useState(null);

  useEffect(() => {
    //eventuale fetch("endpoint/" + params.pastaId)

    const pastaObj = menu.find(pasta => pasta.id.toString() === params.pastaId);
    console.log("PASTA OBJ", pastaObj);
    // if (!pastaObj) {
    //   navigate("/not_found");
    // }

    setTimeout(() => {
      setPasta(pastaObj);
    }, 1000);
  }, [params.pastaId]);

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          {pasta ? (
            <div>
              <h2 className="mt-5">{pasta.name}</h2>
              <img src={pasta.image} alt="pasta dish" />

              <p>{pasta.description}</p>
              <Badge bg="danger">{pasta.label}</Badge>
              <Badge bg="success">{pasta.price}</Badge>
              <DishComments selectedPasta={pasta} className="mt-4" width="12" />
            </div>
          ) : typeof pasta === "undefined" ? (
            <Alert variant="danger">Oggi muori di fame!</Alert>
          ) : (
            <Spinner animation="border" role="status" variant="success">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PastaDetails;
