import React from "react";
import {Container,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import About from "../About";
import Chart from "../Chart";
import Home from "../Home";
import '../stylefiles/LinkBar.css';

export function LinkBar(){
    return(
        <>
        <Container className="sm display-flex justify-contnet-center mt-1 navLinkMAin">
            <Row className='Link-lay'>
                <Col>
                    <Link className="Home" to='/' element={ <Home />}>Home</Link>
                </Col>
                <Col>
                    <Link className='About' to='/About' element={<About />}>About</Link>
                </Col>
                <Col>
                    <Link className='Chart' to='/Chart' element={<Chart />}>Chart</Link>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default LinkBar;