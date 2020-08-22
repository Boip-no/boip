import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <Link href="https://discord.com/channels/@me"> 
                <i cLass="fab fa-discord"></i>
            </Link>
            <Link href="https://github.com/Boip-no"> 
                <i cLass="fab fa-github"></i>
            </Link>
            <Link href="#"> 
                <i cLass="fab fa-twitter-square"></i>
            </Link>
            <Link href="#"> 
                <i cLass="fab fa-youtube-square"></i>
            </Link>
        </footer>
    );
}

export default Footer;