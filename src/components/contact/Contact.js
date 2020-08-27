import React from "react";
import Photo from "../../images/myklys.jpg";

export function Contact() {
    return(
        <div id="contactBackground" className="box-div">
            <div className="container-fluid">
                <div className="container">
                    <div className="row p-5">
                        <div className="col-sm-4">
                            <h3>Jorun Pihl Bratteng</h3>
                            <img src={Photo} alt="This is how I look like" />
                            <p><i className="fas fa-mobile-alt"></i> 47 61 02 82</p>
                            <p><i className="fas fa-at"></i> jorun.p.j@gmail.com</p>
                        </div>
                        <div className=" col-sm-8">
                            <h4>I am a 28 years old frontend-developer student,      graduating October 2020. I am based in Tønsberg, Norway.</h4>
                            <p>From my education I have gained experience in HTML 5, CSS 3, SASS, JavaScript and React.</p>

                            <p>My previous work experience is customer service, which I liked, as I got to work with people. I like to understand other people's perspectives, see their needs and help them achieve those thoughts and goals. These are qualities I always want to evolve and make use of as I am turning into a greate frontend-developer. I have a passion to create and solve problems, and therefore I know I will be a good developer. I am currently in training and loving it!</p>

                            <p>Hope you like what you are seeing and if you have any questions or you just like what you just saw, please contact me by email or number. </p>

                            <p>Looking forward to hear from you!</p>
                            
                            <p>Best regards</p>
                            
                            <p>Jorun Pihl Bratteng</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;