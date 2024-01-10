import React, { ReactNode, createContext, useCallback, useContext, useState } from "react";
import { api } from "../services/api"
import { useNavigate } from "react-router-dom";

interface ContextProps {
    token: TokenState;
    userLogged(): boolean;
    signIn({email, password}): Promise<void>,
    registerUser({
        email,
        password,
        name,
        bio,
        contact,
        course_module
    }:RegisterData): Promise<void>;
    logOut: () => void;
}

interface InputProps {
    children: ReactNode;
}

interface TokenState {
    token: string;
}

interface UserData {
    email, password: string
}

interface RegisterData {
    email, 
    password,
    name,
    bio,
    contact,
    course_module: string;
}

const Context = createContext<ContextProps>({} as ContextProps)

export const ContextProvider: React.FC<InputProps> = ({children}) => {
    const navigate = useNavigate()
    const [ token, setToken ] = useState<TokenState>(() => {
        const token = localStorage.getItem("@TOKEN");

        if (token) {
            return {token}
        }

        return { } as TokenState;
    });

    const signIn = useCallback(async ({ email, password }:UserData) => {
        const response = await api.post("/sessions", {
            email: email,
            password: password,
        });

        const { token } = response.data;
        setToken(token)
        localStorage.setItem("@TOKEN", token)
    }, [])

    const registerUser = useCallback(async ({
        email,
        password,
        name,
        bio,
        contact,
        course_module
    }:RegisterData) => {
        await api.post("/users", {
            email: email,
            password: password,
            name: name,
            bio: bio,
            contact: contact,
            course_module: course_module
        })
    }, [])

    const userLogged = useCallback(() => {
        const token  = localStorage.getItem("@TOKEN");
        if (token) {
            return true;
        }

        return false;
    }, [])

    const logOut = useCallback(() => {
        localStorage.clear()
        navigate("/")
    }, [])

    return (
        <Context.Provider value={{
            token,
            signIn,
            registerUser,
            userLogged,
            logOut
        }}>
            {children}
        </Context.Provider>
    )
};

export function useAuth(): ContextProps {
    const context = useContext(Context);
    return context
}