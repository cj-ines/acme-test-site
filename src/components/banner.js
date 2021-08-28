import React from "react";

function Banner({ banner }) {
    return (
        <div className="container banner-container">
            <div className="banner">
                <div className="banner-title">
                    { banner.title.map((title) => 
                        <h1>{title}</h1>
                    )}
                </div>
                <div className="banner-subtitle">
                    { banner.subTitle.map((title) => 
                        <h3>{title}</h3>
                    )}
                </div>
            </div>
            <div className="gradient"></div>
        </div>
    )
}

export default Banner;