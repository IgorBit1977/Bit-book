import React from 'react';


const Header = () => {

    return (

        <div className="nav-wrapper container">

            <a href="#" className="brand-logo">Bitbook</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="sass.html"> Feed | </a></li>
                <li><a href="badges.html"> People | </a></li>
                <li><a href="collapsible.html"> Profile </a></li>
            </ul>
        </div>
    )
}

export { Header }