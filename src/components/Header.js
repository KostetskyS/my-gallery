import React from 'react';
import {Container, Navbar, Nav, Button} from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/header.css';
import { Link } from 'react-router-dom';

export default function Рeader() {
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
            <Navbar.Collapse id='responsive-navbar-nav'> 
                <Nav className='mr-auto'>
                    <Nav.Link className='headerMenuItem' ><Link to='/'>Home</Link></Nav.Link>  
                    <Nav.Link className='headerMenuItem' ><Link to='/'>About</Link></Nav.Link>  
                    <Nav.Link className='headerMenuItem' ><Link to='/'>Contacts</Link></Nav.Link>  
                </Nav>
                <Nav className='headerBtn'>
                    <Button className="btn btn-secondary"><Link to='/logIn'>LOG IN</Link></Button>  
                    <Button className="btn btn-secondary"><Link to='/register'>Register</Link></Button>  
                </Nav>
            </Navbar.Collapse> 
        </Container>
    </Navbar>
  )
}