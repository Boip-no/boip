import React from 'react';
import Heading from "./components/layout/Heading";
import Paragraph from "./components/layout/Paragraph";
import Layout from "./components/layout/Layout";
import Logo from "./images/logo-bB.png";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import './sass/style.scss';

function App() {
  return (
    <Layout>
      <NavLink to="/" exact>
          <Navbar.Brand to="/"> 
              <img className="logo" src={Logo} alt="website logo" />
          </Navbar.Brand>
      </NavLink>
      <Heading subtitleOne="My name is Jorun and I am a"
                  title="<!--Frontend-developer/>"
      />
         
      <Paragraph>
          Scroll down for more information
      </Paragraph>

    </Layout>
  );
}

export default App;
