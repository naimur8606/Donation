import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";

const MainLayout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;