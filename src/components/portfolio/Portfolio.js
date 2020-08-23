import React from "react";
import { Link } from "react-router-dom";
import Got from "../../images/got.jpg";
import Space from "../../images/spaceX.jpg";
import Letah from "../../images/L2.jpg";
import SM from "../../images/SM3.jpg";


export function Portfolio() {
    return (
        <>
            <div className="container-fluid">
                <Link to="http://boip.no/FEU2/Semester-project-2/character.html"><img src={Got} alt="image of the website" /></Link>
                    <div>
                      <h5>GOT Board Game</h5>
                      <p>This semester project was to building an online board game for Game of Thrones. The board game is made by using HTML, CSS and JavaScript.</p>
                      <Link to="#" className="btn btn-primary">Read more</Link>
                    </div>
            </div>
            <div className="container-fluid">
                <Link to="http://boip.no/FEU2/Semester-project-2/character.html"><img src={Letah} alt="image of the website" /></Link>
                    <div>
                      <h5>Letah</h5>
                      <p>To put into practice the principles learnt throughout this course and combine them with my skills in HTML, CSS and JavaScript.</p>
                      <Link to="#" className="btn btn-primary">Read more</Link>
                    </div>
            </div>
            <div className="container-fluid">
                <Link to="http://boip.no/FEU2/Semester-project-2/character.html"><img src={Space} alt="image of the website" /></Link>
                    <div>
                      <h5>Space X</h5>
                      <p>Build a microsite for SpaceX or NASA. This should focus on space technology.
                        A microsite is a branded, self-contained site, usually on a its own domain, with a single purpose and a limited number of pages. The purpose can be promotional or editorial, and be may linked to a specific event or period of time. A microsite is usually built as an addition to an existing brand website.</p>
                      <Link to="#" className="btn btn-primary">Read more</Link>
                    </div>
            </div>
            <div className="container-fluid">
                <Link to="http://boip.no/FEU2/Semester-project-2/character.html"><img src={SM} alt="image of the website" /></Link>
                    <div>
                      <h5>Sience Museum</h5>
                      <p>The project exam should reflect my creative and technical knowledge and skills based on the first semester curriculum. This includes design principles, project management, communication technology, and developing with HTML/CSS.</p>
                      <Link to="#" className="btn btn-primary">Read more</Link>
                    </div>
            </div>
        </>
    );
}

export default Portfolio;