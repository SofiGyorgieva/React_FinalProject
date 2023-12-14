import styles from './Navbar.module.css';

import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return (      
        <nav className={styles.nav}>
            <div className={styles.navbar}>
                <div>
                    <Link to="/">Home</Link> 
                    <Link to="/upcomming">Upcomming Events</Link>
                    <Link to="/past">Past Events</Link>
                </div>
                <div>
                    <Link to="/myEvents">My Events</Link>
                    <Link to="/goingTo">Going to..</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/logout">Logout</Link>
                </div>
            </div>
        </nav>
    )
};
