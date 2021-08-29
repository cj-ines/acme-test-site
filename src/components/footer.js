import React from "react";
import { StaticImage } from "gatsby-plugin-image"

function Footer( {phone}) {
    return (
       <footer className="container footer-container" id="contact_us_section">
           <div className="contacts">
            <div>
            Call us at { phone }<br></br>
                for more information 
            </div>
            <div className="contacts-social">
                Social Share
                <div className="contacts-social-icons">
                    <StaticImage  src="../images/img/social/twitter.png" alt="twitter logo" />
                    <StaticImage  src="../images/img/social/facebook.png" alt="facebook logo"/>
                    <StaticImage  src="../images/img/social/linkedin.png" alt="linked logo" />
                    <StaticImage  src="../images/img/social/social1.png" alt="email logo" />
                </div>
            </div>
           </div>
       </footer>
    )
}

export default Footer;