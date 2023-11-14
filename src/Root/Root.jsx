import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="p-5 font-Poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;