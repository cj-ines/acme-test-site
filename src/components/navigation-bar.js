import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function NavigationBar({ navigation }) {
    return (
        <nav>
            <div className="navigation-bar">
                <div className="navigation-bar-logo">
                    <StaticImage 
                        src="../images/logo.png" width={120} layout="fixed" alt="Logo hello"
                        quality={95}/>
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