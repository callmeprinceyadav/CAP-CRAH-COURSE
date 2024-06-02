import { createContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
    const [authDetails, setAuthDetails] = useState({
        isLoggedin: true,
        token: null
    })

    const Login = (token) => {
        setAuthDetails({
            isLoggedin: true,
            token: token
        })
    }
    const Logout = (token) => {
        setAuthDetails({
            isLoggedin: false,
            token: null
        })
    }

    return (
        <AuthContext.Provider value={{ authDetails, Login, Logout }}>
            {children}
        </AuthContext.Provider>
    )

}

