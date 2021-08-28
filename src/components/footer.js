import React from "react";

function Footer( {phone}) {
    return (
       <footer className="container footer-container">
           <div className="contacts">
            <div>
            Call us at { phone }<br></br>
                for more information 
            </div>
            <div className="contacts-social">
                Social Share
                <div>
                    <img src="/img/social/twitter.png" />
                    <img src="/img/social/facebook.png" />
                    <img src="/img/social/linkedin.png" />
                    <img src="/img/social/social1.png" />
                </div>
            </div>
           </div>
       </footer>
    )
}

export default Footer;