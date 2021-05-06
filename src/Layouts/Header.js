import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import SignInModal from '../modals/SignIn'

const Header = () => {
    const [signInModalOn, setSignInModalOn] = useState(false);
    return (
        <>
        <SignInModal show={signInModalOn} onHide={() => setSignInModalOn(false)}/>
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                <Navbar.Brand href="#home">React Practice</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">홈</Nav.Link>
                        <Nav.Link href="#link">블로그</Nav.Link>
                    </Nav>
                    <hr></hr>
                    <Nav className="ml-auto">
                        <Nav.Link onClick={() => setSignInModalOn(true)}>로그인</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
        </>
    )
}


export default Header;