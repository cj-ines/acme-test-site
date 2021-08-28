import React from "react";

function Banner({ banner }) {
    return (
        <div className="container banner-container">
            <div className="banner">
                <div className="banner-title">
                    { banner.title.map((title, index) => 
                        <h1 key={index}>{title}</h1>
                    )}
                </div>
                <div className="banner-subtitle">
                    { banner.subTitle.map((title, index) => 
                        <h3 key={index}>{title}</h3>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Banner;