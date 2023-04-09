import { Navigate, Outlet, } from "react-router-dom";

function UnAuthRoute() {
    let auth = !!localStorage.getItem('authToken');

   
    return ( 
        !auth ? <Outlet/ > : <Navigate to="/home" />
    )
}

export default UnAuthRoute;
