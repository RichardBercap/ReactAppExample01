import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <nav>
            <div className="nav-wrapper">

                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="brand-logo">React App</a>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>


            </div>
        </nav>
    );
}

export  default Nav;