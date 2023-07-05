import { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminPanel.css';
import Axios from 'axios';

function AdminPanelStatistics() {

  const token = localStorage.getItem('token');

  // State variables
  const [userInfo, setUserInfo] = useState({ firstName: "", lastName: "", email: "", password: "", isAdmin: "", avatar: "" });
  const [loaded, setLoaded] = useState(false);

  // Fetch user info if not already loaded
  if (!loaded) {
    const user = Axios({
      method: "get",
      url: "http://localhost:3001/api/auth/account",
      headers: {
        Authorization: "Bearer " + token
      }
    });

    user.then((result) => {
      setUserInfo(result.data);
      setLoaded(true);
    });
  }

  return (
    <Container>
      {/* Conditional rendering based on isAdmin value */}
      {userInfo.isAdmin ? (
        <Container>
          <h1 className="text-center text-primary-emphasis my-5">Gestion des utilisateurs</h1>
          <Row className="mb-4">
            <Col>
              <Card body>
                <h2 className="text-center my-2">Aperçu des statistiques de création de contenu</h2>
                <img src="" alt="" className="img-fluid" title='image représentant les statistiques' />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3 mb-md-0">
              <Card body>
                <h2 className="text-center my-2">Consultation rsx</h2>
                <img src="hh" alt="" className="img-fluid" />
              </Card>
            </Col>
            <Col md={6}>
              <Card body>
                <h2 className="text-center my-2">Partage rsx</h2>
                <img src="hh" alt="" className="img-fluid" />
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <Row className="mt-5">
          <Col>
            <p>Vous devez être admin.</p>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default AdminPanelStatistics;
