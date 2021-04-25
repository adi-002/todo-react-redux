import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
function Navbar() {
    return (
        <div className="navbar">
            <div className="header-div">
                <h1 className="header">To-Do's List</h1>
            </div>

            <ul className="nav">
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/">Today's Task</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/pending">Pending</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/inprogress">In Progress</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/completed">Completed</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to="/abondon">Abondon</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
