import React from 'react';
import Heading from "./components/layout/Heading";
import Paragraph from "./components/layout/Paragraph";
import Portfolio from "./components/portfolio/Portfolio"
import Layout from "./components/layout/Layout";
import Footer from "./components/footer/Footer";
import './sass/style.scss';

function App() {
  return (
    <Layout>
      
      <div className="wrapper">
        <Heading  subtitleOne="My name is Jorun and I am a"
                  title="<!--Frontend-developer/>"
        />
         
        <Paragraph>
          Scroll down for more information
        </Paragraph>

        <Portfolio />
      </div>
        <Footer />
    </Layout>
  );
}

export default App;
