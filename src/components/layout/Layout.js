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
import SlideContainer from "../slide/SlideContainer"
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";



function Layout({ children }) {
    return (
        
        <Router> 
            <div className="wrapper">   
                <Navbar variant="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink to="#portfolio" exact className="nav-link">
                                Porfolio
                            </NavLink>
                            <NavLink to="#contact" exact className="nav-link">
                                Contact
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container>
                    <Switch>
                        <Route path="/Portfolio" exact compontent={Portfolio} />
                        <Route path="/Contact" exact compontent={Contact} />
                    </Switch>
                </Container>
                
                    <div className="layout">
                        {children}
                    </div>
                <Portfolio />
                <SlideContainer />
                <Contact />
                
            </div>
            <Footer />
        </Router>
    );
}

export default Layout;