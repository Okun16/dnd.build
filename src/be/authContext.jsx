import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser, login as apiLogin, logout as apiLogout, signup as apiSignup } from "./auth.js";


const AuthContext = createContext(null);

export function AuthProvider({children}){


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCurrentUser().then((me) => setUser(me))
       .catch(() => setUser(null))
       .finally(() => setLoading(false));
    }, []);

    async function login(username, password) {
        const me = await apiLogin(username, password);
        setUser(me);
    }

    async function logout(){
        await apiLogout();
        setUser(null);
    }

    async function signup(username, email, password){
        const me = await apiSignup(username, email, password);
        setUser(me);
    }

    return(
        <AuthContext.Provider value={{user, loading, login, signup, logout}}>
            {children}
        </AuthContext.Provider>
    )

}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);