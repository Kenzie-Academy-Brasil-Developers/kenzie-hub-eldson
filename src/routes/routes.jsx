import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Dashboard } from "../pages/dashboard";
import { PrivateRoutes } from "./privateRoutes";
export function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route path="/" element={<PrivateRoutes/>}>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>

            <Route path="*" element={"/dashboard"}/>
        </Routes>
    );
}