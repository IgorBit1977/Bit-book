import React from 'react';


const Header = () => {

    return (

        <nav>
            <div className="nav-wrapper container">
                <a href="#" className="brand-logo footerText">Bitbook</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li className="liFeed1"><a className="liFeed1" href="sass.html">Feed</a></li>
                    <li className="liFeed2"><a className="liFeed2" href="badges.html">People</a></li>
                    <li className="liFeed3"><a className="liFeed3" href="collapsible.html">Profile</a></li>
                </ul>
            </div>
        </nav>
    )
}

export { Header }