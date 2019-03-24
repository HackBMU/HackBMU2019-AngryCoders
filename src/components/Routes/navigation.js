import React from 'react';
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/mygames">Games</NavLink>
            <NavLink to="/create">Create</NavLink>
            <NavLink to="/notifications">Notifications</NavLink>
            <NavLink to="/user">User</NavLink>
        </div>
    )
}

export default Navigation;
