import { useState } from "react";

import { useAuth } from "../context/context";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
    const { userLogged } = useAuth()

    if(!userLogged()) {
        return <Navigate to="/"/>
    } else {
        return <Outlet/>
    }
}