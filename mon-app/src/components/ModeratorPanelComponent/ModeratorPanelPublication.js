// Importing the required dependencies and styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { X } from 'react-bootstrap-icons';
import { Check2 } from 'react-bootstrap-icons';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import './ModeratorPanel.css';

// Defining the ModeratorPanelPublication component
function ModeratorPanelPublication() {
  // Retrieving the token from the local storage
  const token = localStorage.getItem('token');
  
  return (
    <Container>
      {/* Conditional rendering based on the presence of the token */}
      {token ? (
        <Container>
          {/* Rendering the header */}
          <Row className="my-5">
            <Col xs={12}>
              <h1 className="text-center text-primary-emphasis">Gestion des publications</h1>
            </Col>
          </Row>
          <Card body>
            {/* Rendering the publication */}
            <Row>
              <Col xs={4} md={2}>
                <p>@PseudoUtilisateur</p>
                <Image src="..." rounded />
              </Col>
              <Col xs={8} md={8}>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                </p>
              </Col>
              <Col xs={12} md={2}>
                {/* Rendering the action buttons */}
                <Row>
                  <Col xs={6} className="text-end">
                    <Button variant="outline-secondary" className="fw-bold text-success">
                      <Check2 />
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button variant="outline-secondary" className="text-danger">
                      <X />
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Container>
      ) : (
        <Row className="mt-5">
          <Col>
            <p>Vous devez être connecté pour poster un message.</p>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default ModeratorPanelPublication;
