import React from "react";
import {Navbar, Container} from 'react-bootstrap'

const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark" className="mt-5">
            <Container>
                <Navbar.Brand href="#home">
                    <p>dibuat oleh Riki Widiantoro dengan mengikuti latihan React Js Dasar di channel Wahidev Academy</p>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Footer;