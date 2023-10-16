import { DashboardStyle } from "./style";
import { Header } from "../../components/header"
import { ButtonComponent } from "../../components/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Dashboard() {
    const navigate = useNavigate()
    const [ user, setUser ] = useState({})

    const logout = () => {
        localStorage.clear("@TOKEN")
        localStorage.clear("@USER")
        navigate("/")
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("@USER") || "[]")
        setUser(user)
    }, [])

    return (
        <DashboardStyle>
            <Header space="space"dashboard="full-width">
                <ButtonComponent
                    title="Sair"
                    styleType="back"
                    onClick={logout}
                />
            </Header>
            <section>
                <div className="content-section">
                    <h1 className="title-1">Olá, {user.name}</h1>
                    <p className="headline">{user.course_module}</p>
                </div>
            </section>
            <section className="container">
                <div className="content-section body">
                    <h1 className="title-1">Que pena! Estamos em desenvolvimento :(</h1>
                    <p className="title-2">Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </div>
            </section>
        </DashboardStyle>
    );
}