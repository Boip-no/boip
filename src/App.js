import React from 'react';
import Heading from "./components/layout/Heading";
import Paragraph from "./components/layout/Paragraph";
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
      </div>
        <Footer />
    </Layout>
  );
}

export default App;
