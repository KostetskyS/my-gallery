import { Navigate, Outlet, } from "react-router-dom";

function PrivateRoute() {
    let auth = !!localStorage.getItem('authToken');;

    return ( 
         auth ? <Outlet/ > : <Navigate to="login" />
     )
}

export default PrivateRoute;
