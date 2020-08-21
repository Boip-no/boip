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
import Logo from "../../images/logo-yP.png";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";
import Resume from "../resume/Resume";

function Layout({ children }) {
    return (
        
        <Router>    
            <Navbar bg="light" variant="light" expand="lg">
                <NavLink to="/" exact>
                    <Navbar.Brand to="/"> 
                        <img src={Logo} alt="website logo" />
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/" exact className="nav-link">
                            Porfolio
                        </NavLink>
                        <NavLink to="/" exact className="nav-link">
                            Contact
                        </NavLink>
                        <NavLink to="/" exact className="nav-link">
                            Resume
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Switch>
                    <Route path="/" exact compontent={Portfolio} />
                    <Route path="/Contact" exact compontent={Contact} />
                    <Route path="/Resume" exact compontent={Resume} />
                </Switch>
            </Container>
            <div className="layout">
                {children}
            </div>
        </Router>
        
    );
}

export default Layout;