// Importing the required dependencies and styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { X } from 'react-bootstrap-icons';
import { Check2 } from 'react-bootstrap-icons';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './ModeratorPanel.css';

// Defining the ModeratorPanelComment component
function ModeratorPanelComment() {
  // Retrieving the token from the local storage
  const token = localStorage.getItem('token');
  
  return (
    <Container>
      {/* Conditional rendering based on the presence of the token */}
      {token ? (
        <Container>
          {/* Rendering the header */}
          <Row className="mt-5">
            <Col>
              <h1 className="text-center text-primary-emphasis">Gestion des commentaires</h1>
            </Col>
          </Row>
          <Card body>
            {/* Rendering the comment */}
            <Row className="mt-3">
              <Col md={10}> 
                <p>@PseudoUtilisateur</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit</p>
              </Col>
              {/* Rendering the action buttons */}
              <Col md={2} className="d-flex align-items-center justify-content-center"> 
                <Row>
                  <Col xs={6} className="text-end">
                    <Button variant="outline-secondary" className="fw-bold text-success" title="Valider le commentaire">
                      <Check2 />
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button variant="outline-secondary" className="text-danger" title="Supprimer le commentaire">
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

export default ModeratorPanelComment;
