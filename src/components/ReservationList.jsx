import { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup, Badge, Spinner, Alert } from "react-bootstrap";

import { format, parseISO } from "date-fns";
import { it } from "date-fns/locale";

// Reservation list è un componente che si occuperà di recuperare la lista degli appuntamenti dalle API e presentarle all'utente

// Recuperare una risorsa esterna può richiedere del tempo... (anche svariati secondi, minuti, ecc...)
// un'app moderna presenterà all'utente le parti STATICHE *IMMEDIATAMENTE*, l'attesa verrà compensata da un indicatore di caricamento
// fino a che non si popoleranno i dati da mostrare all'utente

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchReservations = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/reservation");

      if (response.ok) {
        const data = await response.json();
        setReservations(data);
        setIsLoading(false);
      } else {
        setHasError(true);
        setErrorMessage(`Errore nel caricamento dei contenuti. ERRORE: ${response.status}`);
        setIsLoading(false);
      }
    } catch (error) {
      setHasError(true);
      setErrorMessage(`FATAL ERROR: ${error.message}`);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("SONO COMPONENT DID MOUNT!");
    fetchReservations();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center  mt-5">
        <Col xs={12} md={6}>
          <h2 className="text-center">Prenotazioni:</h2>
          {/* render condizionale dell'avviso di errore */}
          {hasError && <Alert variant="danger">{errorMessage}</Alert>}
          {/* render condizionale dello Spinner */}
          {isLoading && (
            <div className="text-center">
              <Spinner animation="border" variant="success" />
            </div>
          )}
          {/* render condizionale per avviso di prenotazioni ancora vuote (al primo utilizzo dell'applicazione) */}
          <ListGroup>
            {reservations.length === 0 && !isLoading && !hasError && (
              <ListGroup.Item>Non esistono ancora prenotazioni, usa il form per aggiungerne una 👇</ListGroup.Item>
            )}

            {/* qua inseriamo la lista dinamica */}
            {reservations.map(reservation => (
              <ListGroup.Item key={reservation._id} className="d-flex justify-content-between">
                <span>
                  <span className="fw-bold text-muted">
                    <Badge bg="dark" className="me-2">
                      🧑‍🤝‍🧑{reservation.numberOfPeople}
                    </Badge>
                    {reservation.name}
                  </span>
                  {" - "}
                  {/* {new Date(reservation.dateTime).toLocaleString("it-IT")} */}
                  {/* voglio trasformare la proprietà dateTime della prenotazione in qualcosa di più leggibile*/}
                  {/* useremo date-fns, servono due passaggi: 
                    1) trasformare la stringa dateTime in un oggetto Date
                    2) formattare questo oggetto Date in un qualcosa di più leggibile
                  */}
                  {format(parseISO(reservation.dateTime.split(".")[0]), "do MMMM - HH:mm", { locale: it })}{" "}
                  {/* it è una variabile importata da date-fns/locale in alto ☝️ */}
                </span>
                {reservation.smoking && <span>🚬</span>}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ReservationList;
