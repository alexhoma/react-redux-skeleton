import React from "react";
import {Link} from "react-router";

const Header = () => {
    return (
        <header>
            <h1>React + Redux Boilerplate</h1>

            <nav className="nav-bar">
                <Link to="/" activeClassName="active">Home</Link>
                {' '}
                <Link to="/blog" activeClassName="active">Blog</Link>
            </nav>

            <hr />
        </header>
    )
}

export default Header;
