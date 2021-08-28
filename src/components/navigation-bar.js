import React from "react"

function NavigationBar({ navigation }) {
    return (
        <nav>
            <div className="navigation-bar">
                <div className="navigation-bar-logo">
                    <img src={navigation.logoUrl} />
                    <div>
                        <h3>Reasearch Professional</h3>
                        <h2>Plaftform</h2>
                    </div>
                </div>
                <ul>
                    { navigation.links.map((link, index) => 
                        <li key={index}>{ link }</li>    
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar