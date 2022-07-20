import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = ({ isAuth }) => {
    console.log(!!isAuth)
    if(!isAuth) {
        return <Navigate to="/login" />
    }
    return <Outlet />
};

export default ProtectedLayout;