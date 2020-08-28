import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
            BrowserRouter as Router,
            Switch,
            Route,
        } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Portfolio from "../portfolio/Portfolio";
import SlideContainer from "../slide/SlideContainer"
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";



function Layout({ children }) {
    return (
        
        <Router> 
            <div className="wrapper">   
                <Navbar id="top" variant="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <a href="#portfolio" className="nav-link">
                            Portfolio
                            </a>
                            <a href="#contact" className="nav-link">
                            Contact
                            </a>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container>
                    <Switch>
                        <Route path="/Portfolio" exact compontent={Portfolio} />
                        <Route path="/Contact" exact compontent={Contact} />
                    </Switch>
                
                    <div className="layout">
                        {children}
                    </div>
                    </Container>
                <Portfolio />
                <SlideContainer />
                <Contact />
                <Footer />
            </div>
        </Router>
    );
}

export default Layout;