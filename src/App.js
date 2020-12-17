import React from 'react';
import Heading from "./components/layout/Heading";
import Paragraph from "./components/layout/Paragraph";
import Layout from "./components/layout/Layout";
import Logo from "./images/logo-bB.png";
import Button from "react-bootstrap/Button";
import './sass/style.scss';

function App() {
  return (
    <Layout>
      <img className="logo" src={Logo} alt="website logo" />
          
      <Heading subtitleOne="My name is Jorun and I am a"
                  title="<!--Frontend-developer/>"
      />
         
      <Paragraph>
        Take a look at my
        <a href="#portfolio"><Button style={{backgroundColor: "#343a40", border: "grey"}}>Portfolio</Button></a>
      </Paragraph>

    </Layout>
  );
}

export default App;
