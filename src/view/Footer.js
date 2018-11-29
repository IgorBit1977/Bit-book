import React from 'react';

const Footer = () => {

    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="footerText">Footer Content</h5>
                        <p className="footerText text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="footerText">Links</h5>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2018 Copyright BIT
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
            </div>
        </footer>
    )
}

export { Footer }