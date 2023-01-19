import 'react';
import {Outlet} from "react-router-dom";
import Nav from "../components/Nav.jsx";

function LayoutPublic() {

    return (
        <>
            <Nav>
                Menu
            </Nav>
            <main>
                <Outlet />
            </main>
            <footer>
                Footer
            </footer>
        </>
    )
}

export default LayoutPublic
