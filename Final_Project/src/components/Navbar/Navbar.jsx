import styles from './Navbar.module.css'

export default function Navbar(){
    return (      
        <nav className={styles.nav}>
            <div className={styles.navbar}>
                <div>
                    <a>Home</a>
                    <a>Upcomming Events</a>
                    <a>Past Events</a>
                </div>
                <div>
                    <a>My Events</a>
                    <a>Going to..</a>
                    <a>Login</a>
                    <a>Register</a>
                    <a>Logout</a>
                </div>
            </div>
        </nav>
    )
};
