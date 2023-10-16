import { Form } from "../../components/form";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { ButtonComponent } from "../../components/button";
import { FormContainerStyle } from "./style";
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from "react-toastify";
import { api } from "../../services/api"

import { zodResolver } from "@hookform/resolvers/zod"
import 'react-toastify/dist/ReactToastify.css';
import { zodSchemaLogin } from "../../services/zod";

export function Login() {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(zodSchemaLogin)
    })

    const onSubmit = async (data) => {
        await api.post("/sessions", {
            email: data.email,
            password: data.password
        })
        .then((result) => {
            console.log(result.data)
            localStorage.setItem("@TOKEN", JSON.stringify(result.data.token))
            localStorage.setItem("@USER", JSON.stringify(result.data.user))
            navigate("/dashboard")
        })
        .catch(() => {
            toast.error("Email or password incorrect")
        })
    }
    
    return (
        <FormContainerStyle className="login">
            <ToastContainer/>
            <div className="container_form">
                <Header/>
                <Form onSubmit={handleSubmit(onSubmit)} title="Login">   
                    <Input
                        type="email"
                        label="Email"
                        placeholder="Digite seu email"
                        onRegister={{...register("email")}}
                    />
                    {errors.email ? <p className="error-message headline">{errors.email.message}</p> : null}
                    
                    <Input
                        type="password"
                        label="Senha"
                        placeholder="Digite sua senha"
                        onRegister={{...register("password")}}
                    />
                    {errors.password ? <p className="error-message headline">{errors.password.message}</p> : null}
                    
                    <ButtonComponent
                        styleType="active-btn"
                        title="Entrar"
                    />

                    <p className="headline-bold p-link-btn">Ainda não possui uma conta?</p>

                    <ButtonComponent
                        onClick={() => navigate("/register")}
                        styleType="grey"
                        title="Cadastre-se"
                    />
                </Form>
            </div>
        </FormContainerStyle>
    );
};