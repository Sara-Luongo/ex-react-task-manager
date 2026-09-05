import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (<>
        <nav>
            <ul>
                <li>
                    <NavLink to="/add-tasks">add task</NavLink >
                </li>
                <li>
                    <NavLink to="/add-list">tasklist</NavLink>
                </li>
            </ul>
        </nav>
    </>)

};

export default NavBar;