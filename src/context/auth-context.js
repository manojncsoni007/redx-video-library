import axios from "axios";
import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { successToast } from "../utils/toast";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState("");
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const loginUser = async (email, password, setError) => {
        try {
            const {
                data: { user, encodedToken }, status
            } = await axios.post('/api/auth/login', { email, password });
            if (status === 200) {
                setToken(encodedToken);
                setIsLoggedIn(true);
                setUser(user);
                navigate(location.state?.from?.pathname || "/");
                localStorage.setItem("token", encodedToken);
                successToast('login successful');
            } else {
                setError(true)
            }

        } catch (error) {
            console.log(error);
            setError(true)
        }
    }

    const signupUser = async (firstName, lastName, email, password,) => {
        try {
            const {
                data: { user, encodedToken }
            } = await axios.post('/api/auth/signup', {
                firstName, lastName, email, password
            });
            setIsLoggedIn(true);
            setToken(encodedToken);
            localStorage.setItem("token", encodedToken);
            setUser(user);
            navigate('/explore');
        } catch (error) {
            if (error.response.status === 422) {
                alert('email already registered');
            }
        }
    }
    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, token, setToken, user, setUser, loginUser, signupUser }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider }