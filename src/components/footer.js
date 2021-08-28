import React from "react";

function Footer( {phone}) {
    return (
       <footer className="container footer-container">
           <div className="contacts">
            <div>
            Call us at { phone }<br></br>
                for more information 
            </div>
            <div>
                ssssocials
            </div>
           </div>
       </footer>
    )
}

export default Footer;