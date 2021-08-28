import React from "react";
import { StaticImage } from 'gatsby-plugin-image'

function Insights({insights}) {

    return (
        <div className="container-insights container">
            <div className="insights-list">
                <h1>ACME Insights</h1>
                <h4>How are factors being used around the world?</h4>
        
                <div className="insights">
                    {insights.map((insight, index)=> 
                    <div key={index} 
                        className="insights-block"
                        style={{borderColor: insight.color}}>
                        <div className="insights-block-thumbnail">
                            {/* <img  src={insight.imageUrl} alt="hello" />  */}
                            <div className={`insights-block-thumbnail-insight-${index}`}></div>
                        </div>
                        <div className="insights-block-text" style={{color: insight.color}}>
                        {insight.text.map((text, index) => 
                        <div key={index}>{text}</div>
                        )}
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Insights;