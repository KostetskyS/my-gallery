import React from 'react';
import { Container } from 'react-bootstrap';
import '../assets/style/home.css';
import Gallery from '../components/Gallery';

function Home() {
    return <div className='homeWrap'>   
            <Container> 
                <Gallery/>
            </Container>
    </div>
}

export default Home
