import React, { Component } from 'react';
import { Link } from 'react-router';

// Stateless component
export const Header = () => {
    return (
        <header className="Header">
            <h1>
                Header
            </h1>
            <ul>
                <li><Link to={"/home"}>Home</Link></li>
                <li><Link to={"/blog/example-entry"}>Blog</Link></li>
            </ul>
            <hr/>
        </header>
    )
}