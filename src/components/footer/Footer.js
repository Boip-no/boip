import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <Link to="https://discord.com/channels/@me"> 
                <i className="fab fa-discord"></i>
            </Link>
            <Link to="https://github.com/Boip-no"> 
                <i className="fab fa-github"></i>
            </Link>
            <Link to="#"> 
                <i className="fab fa-twitter-square"></i>
            </Link>
            <Link to="#"> 
                <i className="fab fa-youtube-square"></i>
            </Link>
        </footer>
    );
}

export default Footer;