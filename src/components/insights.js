import React from "react";

function Insights({insights}) {

    return (
        <div className="container-insights container">
            <div className="insight-list">
                <h1>ACME Insights</h1>
                <h4>How are factors being used around the world?</h4>
        
                <div className="insights">
                    {insights.map((insight, index)=> 
                    <div key={index} 
                        className={'insights-block ' + 'insights-block-' + index }
                        style={{borderColor: insight.color}}>
                        <div className="insights-block-thumbnail">
                            <img src={`img/insights/${index+1}.png`} alt={insights.join(',')}/>
                            <div className="triangle"></div>
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