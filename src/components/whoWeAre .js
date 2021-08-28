import React from "react";

function WhoWeAre({contents}) {
    
    return (
    <div className="whoweare-container container">
        
        <div className="whoweare-contents">
            {contents.map((content, index) => 
            <div className="whoweare">
                <h1>{content.title}</h1>
                <h4>{content.text}</h4>
                <button>Contact Us</button>
            </div>
            )}
        </div>
        <div className="cover"></div>
    </div>
    )
}

export default WhoWeAre;