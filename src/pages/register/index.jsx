import { Form } from "../../components/form";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { ButtonComponent } from "../../components/button";
import { FormContainerStyle } from "../login/style";
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import { zodResolver } from "@hookform/resolvers/zod";
import { zodSchema } from "../../services/zod"
import { Selection } from "../../components/selection";

import { useAuth } from "../../context/context";

export function Register() {
    const navigate = useNavigate()
    const { registerUser } = useAuth()

    const navigationTo = (to) => {
        navigate(to)
    }

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(zodSchema)
    })

    const onSubmit = async (data) => {
        await registerUser({
            email: data.email,
            password: data.password,
            name: data.name,
            bio: data.bio,
            contact: data.contact,
            course_module: data.course_module
        })
        .then(() => {
            toast.success("Conta criada com sucesso!")
        })
        .catch(() => {
            toast.error("Ops! Algo deu errado")
        })
    }
    return (
        <FormContainerStyle>
            <ToastContainer/>
            <div className="container_form">
                <Header space="space">
                    <ButtonComponent
                        onClick={() => navigationTo("/")}
                        styleType="back"
                        title="Voltar"
                    />
                </Header>
                <Form onSubmit={handleSubmit(onSubmit)} title="Crie sua conta">
                    <Input
                        type="text"
                        label="Nome"
                        placeholder="Digite aqui seu nome"
                        onRegister={{...register("name")}}
                    />
                    {errors.name ? <p className="error-message headline">{errors.name.message}</p> : null}
                    <Input
                        type="email"
                        label="Email"
                        placeholder="Digite aqui seu email"
                        onRegister={{...register("email")}}
                    />
                    {errors.email ? <p className="error-message headline">{errors.email.message}</p> : null}

                    <Input
                        type="password"
                        label="Senha"
                        placeholder="Digite aqui sua senha"
                        onRegister={{...register("password")}}

                    />
                    {errors.password ? <p className="error-message headline">{errors.password.message}</p> : null}

                    <Input
                        type="password"
                        label="Confirmar Senha"
                        placeholder="Digite novamente sua senha"
                        onRegister={{...register("confirmPassword")}}
                    />
                    {errors.confirmPassword ? <p className="error-message headline">{errors.confirmPassword.message}</p> : null}

                    <Input
                        type="text"
                        label="Bio"
                        placeholder="Fale sobre você"
                        onRegister={{...register("bio")}}
                    />
                    {errors.bio ? <p className="error-message headline">{errors.bio.message}</p> : null}
                    <Input
                        type="text"
                        label="Contato"
                        placeholder="Opção de contato"
                        onRegister={{...register("contact")}}
                    />
                    {errors.contact ? <p className="error-message headline">{errors.contact.message}</p> : null}

                    <Selection
                        label="Selecionar módulo"
                        options={
                            [
                                "Primeiro Módulo (frontend avancado)"
                            ]
                        }
                        onRegister={{...register("module")}}
                    />
                    {errors.module ? <p className="error-message headline">{errors.module.message}</p> : null}
                    <ButtonComponent
                        title="Cadastrar"
                    />
                </Form>
            </div>
        </FormContainerStyle>
    );
};