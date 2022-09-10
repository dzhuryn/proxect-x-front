import React from "react";
import {NavLink} from "react-router-dom";

export default function Footer(){
    return (
        <footer>
            <ul>
                <li>
                    <NavLink to="/messages">
                        Messages
                    </NavLink>
                </li>
                <li>
                    <NavLink to="">Home</NavLink>
                </li>
            </ul>
        </footer>
    );
}