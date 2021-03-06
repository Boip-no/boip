import React from "react";
import Container from "react-bootstrap/Container";
import Got from "../../images/got.jpg";
import Space from "../../images/spaceX.jpg";
import Letah from "../../images/L2.jpg";
import SM from "../../images/SM3.jpg";
import mVi from "../../images/mVi.jpg";
import Vebr from "../../images/vebr.jpg";


export function Portfolio() {
    return (
        <Container id="portfolio" className="containter-fluid">
          <h2 >
            Portfolio
          </h2>
              <div id="background" className="row p-5 lg box-div">
                    <div className="col-sm-6">
                      <h4>Letah</h4>
                        <p>To put into practice the principles learnt throughout this course and combine them with my skills in HTML, CSS and JavaScript.</p>

                        <p>Click on the picture to see the website</p>
                    </div>    

                    <a className="col-sm-6" href="http://boip.no/FEU1/ixd/CA/index.html">
                      <img id="port-pic" className="box-div" src={Letah} alt="Screenshot of the website" />
                    </a>  
              </div>
              <div className="row p-5 lg">
                    <div className="col-sm-6">
                      <h4>GOT Board Game</h4>
                        <p>This semester project was to building an online board game for Game of Thrones. The board game is made by using HTML, CSS and JavaScript.</p>

                        <p>Click on the picture to see the website</p>
                    </div>

                    <a className="col-sm-6" href="http://boip.no/FEU2/Semester-project-2/character.html">
                      <img id="port-pic" className="box-div" src={Got} alt="Screenshot of the website" />
                    </a>
              </div>
              <div id="background"  className="row p-5 box-div">
                    <div className="col-sm-6">
                      <h4>Mountain View Interior</h4>
                        <p>Build a interior website and learn how to use Photoshop.</p>
                        <p>A microsite is a branded, self-contained site, usually on a its own domain, with a single purpose and a limited number of pages. The purpose can be promotional or editorial, and be may aed to a specific event or period of time. A microsite is usually built as an addition to an existing brand website</p>

                        <p>Click on the picture to see the website</p>
                    </div>
                    <a className="col-sm-6" href="http://boip.no/FEU2/Design2/MA3-Fonts/index.html">
                      <img id="port-pic" className="box-div" src={mVi} alt="Screenshot of the website" />
                    </a>
              </div>
              <div className="row p-5">                
                    <div className="col-sm-6">
                      <h4>Space X</h4>
                        <p>Build a microsite for SpaceX and is focused on space technology.</p>
                        <p>A microsite is a branded, self-contained site, usually on a its own domain, with a single purpose and a limited number of pages. The purpose can be promotional or editorial, and be may aed to a specific event or period of time. A microsite is usually built as an addition to an existing brand website</p>

                        <p>Click on the picture to see the website</p>
                    </div>
                    <a className="col-sm-6" href="http://boip.no/FEU1/Exam/index.html">
                      <img id="port-pic" className="box-div" src={Space} alt="Screenshot of the website" />
                    </a>
              </div>
              <div id="background" className="row p-5 box-div">
                    <div className="col-sm-6">
                      <h4>Sience Museum</h4>
                        <p>The project exam is reflected on my creative and technical knowledge and skills based on the first semester curriculum. This includes design principles, project management, communication technology, and developing with HTML/CSS.</p>

                        <p>Click on the picture to see the website</p>
                    </div>

                    <a className="col-sm-6" href="http://boip.no/FEU1/SemesterProject/SemesterProject-redo/">
                      <img id="port-pic" className="box-div" src={SM} alt="Screenshot of the website" />
                    </a>
              </div>
              <div className="row p-5">                
                    <div className="col-sm-6">
                      <h4>Vebr</h4>
                        <p>For my final exam I have the choice to get a real world client that I have accomplished and build a website for.</p>
                        <p>To take the skills learned over the last two years and take on an extensive project where the finished product should reflect my general development capabilities, in addition to visual and technical skills</p>

                        <p>Click on the picture to see the website</p>

                        <p>For more information about the process of the project.
                          <ul>
                            <li>
                              <a href="https://xd.adobe.com/view/a008797d-8ede-4569-a4ee-eb76093504ad-f55b/">
                                Style Guide
                              </a>
                            </li>
                            <li>
                              <a href="https://xd.adobe.com/view/1d4f6db8-19b7-4211-92b8-ab01db9cbaa7-481c/">
                                Wireframe
                              </a>
                            </li>
                            <li>
                              <a href="https://xd.adobe.com/view/175b6e46-e07b-4b89-8732-5ef1e9d69d89-4208/">
                              Prototype
                              </a>
                            </li>
                          </ul>
                        </p>
                    </div>
                    <a className="col-sm-6" href="https://vebr.netlify.app/">
                      <img id="port-pic" className="box-div" src={Vebr} alt="Screenshot of the website" />
                    </a>
              </div>
              
        </Container> /* /container-fluid*/
    );
}

export default Portfolio;