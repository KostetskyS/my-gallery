import React from 'react';
import {Container, Navbar, Nav, Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/header.css';
import { Link } from 'react-router-dom';

 function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');
  let auth = false;
 
  if (token !== '' || token !== null) {
    auth = true;
  } 

  if (token == null) {
    auth = false;
  }

  function handleLogOut() {
    localStorage.removeItem('authToken');
    navigate('/login')
    console.log(token);
  }

  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>  
    <Container>
            <Navbar.Brand href='/'>  
              <img 
              src={logo} 
              height='50'
              width='50'
              className='logo'
              alt='logo'
              />   
            </Navbar.Brand> 
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-between'> 
                <Nav className='column justify-content-start'> 
                      <Nav.Link as={Link} to="/about">About</Nav.Link> 
                      <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
                </Nav>
                <Nav className='column justify-content-end'>
                  {!auth && 
                  <>  
                      <Button className="btn btn-secondary"><Nav.Link as={Link} to="/logIn">Log In</Nav.Link></Button>
                      <Button className="btn btn-secondary"><Nav.Link as={Link} to="/register">Register</Nav.Link></Button> 
                  </>}
                  {auth && 
                  <>  
                      <Button onClick={handleLogOut} className="btn btn-secondary">LogOut</Button> 
                  </>}
                      
                </Nav>
            </Navbar.Collapse> 
        </Container>
    </Navbar>
  )
}
export default Header