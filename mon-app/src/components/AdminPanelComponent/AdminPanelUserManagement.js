import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminPanel.css';
import Axios from 'axios';

function AdminPanelUserManagement() {
  // State variables
  const [users, setUsers] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch users data
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await Axios.get("http://localhost:3001/api/auth/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs", error);
    }
  };

  // Update user
  const updateUser = async (id) => {
    try {
      const updatedUser = {
        firstName: editName,
        lastName: editLastName,
        email: editEmail,
        isModo: editModo.toLowerCase() === "oui" ? true : false,
      };

      await Axios.put(
        `http://localhost:3001/api/auth/manageuser/${id}`,
        updatedUser,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      // Update user data with modified values
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id
            ? {
                ...user,
                firstName: updatedUser.firstName,
                lastName: updatedUser.lastName,
                email: updatedUser.email,
                isModo: updatedUser.isModo,
              }
            : user
        )
      );
    } catch (e) {
      const error30 = e.response.data.error;
      toast(error30);
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    try {
      await Axios.delete(`http://localhost:3001/api/auth/manageuser/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      // Remove the deleted user from the users list
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (e) {
      const error30 = e.response.data.error;
      toast(error30);
    }
  };

  // Enable edit mode for a user
  const enableEditMode = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, isEditMode: true } : user
      )
    );
  };

  // State variables for edit inputs
  const [editName, setEditName] = useState();
  const [editLastName, setEditLastName] = useState();
  const [editEmail, setEditEmail] = useState();
  const [editModo, setEditModo] = useState();

  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="my-5" style={{ color: "#1C4F9B" }}>
        Gestion Utilisateurs
      </h1>
      <div className="Container">
        {users.map((user) => (
          <Container key={user.id} className="container">
            <Row className="row d-flex justify-content-center">
              <Col sm={1} className="text-start">
                {/* Render input fields based on edit mode */}
                {user.isEditMode ? (
                  <input
                    className="name"
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                ) : (
                  <input
                    className="name"
                    type="text"
                    value={user.firstName}
                    disabled
                  />
                )}
              </Col>
              <Col sm={1}>
                {user.isEditMode ? (
                  <input
                    className="name"
                    type="text"
                    value={editLastName}
                    onChange={(e) => setEditLastName(e.target.value)}
                  />
                ) : (
                  <input
                    className="name"
                    type="text"
                    value={user.lastName}
                    disabled
                  />
                )}
              </Col>
              <Col sm={3}>
                {user.isEditMode ? (
                  <input
                    className="email"
                    type="text"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                  />
                ) : (
                  <input
                    className="email"
                    type="text"
                    value={user.email}
                    disabled
                  />
                )}
              </Col>
              <Col sm={1}>
                {user.isEditMode ? (
                  <input
                    className="role"
                    type="text"
                    value={editModo}
                    onChange={(e) => setEditModo(e.target.value)}
                  />
                ) : (
                  <input
                    className="role"
                    type="text"
                    value={user.isModo ? "Oui" : "Non"}
                    disabled
                  />
                )}
              </Col>
              </Row>
            </Container>
          ))}
        </div>
      </div>
    );
  }
  
  export default AdminPanelUserManagement;
