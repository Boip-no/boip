import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
            BrowserRouter as Router,
            Switch,
            Route,
            NavLink,
        } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";
import Resume from "../resume/Resume";
import FadeContainer from "../fade/FadeContainer";

function Layout({ children }) {
    return (
        
        <Router>    
            <Navbar bg="light" variant="light" expand="lg">
                <NavLink to="/" exact>
                    <Navbar.Brand href="/">BOIP</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/" exact className="nav-link">
                            Portfolio
                        </Nav.Link>
                        <Nav.Link href="/Contact" className="nav-link">
                            Contact
                        </Nav.Link>
                        <Nav.Link href="/Resume" className="nav-link">
                            Resume
                        </Nav.Link>
                        <NavLink to="/fade" className="nav-link">
                            Fade
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Switch>
                    <Route path="/" exact compontent={Portfolio} />
                    <Route path="/Contact" compontent={Contact} />
                    <Route path="/Resume" compontent={Resume} />
                    <Route path="/Fade" compontent={FadeContainer} />
                </Switch>
            </Container>
            <div className="layout">
                {children}
            </div>
        </Router>
        
    );
}

export default Layout;