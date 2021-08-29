import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

function NavigationBar({ navigation }) {

    const [showMenu, setShowMenu] = useState(false);

    const toggle = () => {
        setShowMenu(!showMenu);
    }

    return (
        <nav>
            <div className="navigation-bar">
                <div className="navigation-bar-logo">
                    <div className="image navigation-bar-logo-brand">
                        <StaticImage  src="../images/logo.png" width={50} alt="logo"/>
                        <strong>acme<br />corporation</strong>
                    </div>                    
                    <div className="navigation-bar-title">
                        <h3>Reasearch Professional</h3>
                        <h2>Plaftform</h2>
                    </div>
                </div>

                {  
                    <ul className={'navigation-bar-links ' + (showMenu? '--show': '')}>
                        { navigation.links.map((link, index) => 
                            <li key={index}>{ link }</li>    
                        )}
                    </ul>
                }
                {
                    showMenu && <div className="navigation-overlay"></div>
                }
                <div className="navigation-bar-menu" onClick={toggle}>
                    
                    { !showMenu &&
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    }
                    { showMenu &&
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path style={{fill: 'red'}} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    }
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar