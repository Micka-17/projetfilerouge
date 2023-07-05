import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { ChatLeftDots, PlusCircle } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';

function FilterView() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="my-5" style={{color:'#1C4F9B'}}>Type de contenu</h1>
      <div className="d-flex w-75 justify-content-between bg-light p-3" style={{marginBottom:'20px'}}>
        <Dropdown>
          <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
            Type de contenu
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#action-1">Action 1</Dropdown.Item>
            <Dropdown.Item href="#action-2">Action 2</Dropdown.Item>
            <Dropdown.Item href="#action-3">Action 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button variant="outline-primary" className="mr-2">
          <PlusCircle /> Ajouter du contenu
        </Button>
      </div>
      <div style={{ height: '50vh', overflowY: 'scroll' }}>
        {[1, 2, 3, 4].map((item) => (
          <Container style={{borderBottom: '1px solid grey', margin: '10px', padding:'10px'}}>
            <Row className="align-items-center">
              <Col sm={5} className='text-start'>Lorem ipsum dolor aemet  hsdjhsdjsdh Lorem ipsum dolor aemet  hsdjhsdjsdh Lorem ipsum dolor aemet  hsdjhsdjsdh Lorem ipsum dolor aemet  hsdjhsdjsdh</Col>
              <Col sm={2}><Badge bg="secondary" pill><ChatLeftDots /> 14</Badge></Col>
              <Col sm={2}>00/00/0000</Col>
              <Col sm={2}>@user1</Col>
              <Col sm={1} className='text-end'>
                <DropdownButton 
                  variant="outline-secondary" 
                  align="end"
                  id="dropdown-menu-align-end"
                >
                  <Dropdown.Item eventKey="1">Partager</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="2">Exporter</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="3">Mettre de côté</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Mettre en favoris</Dropdown.Item>
                </DropdownButton>
              </Col>
            </Row>
          </Container>
        ))}
      </div>
    </div>
  );
}

export default FilterView;


