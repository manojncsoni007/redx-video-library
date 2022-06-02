import axios from "axios";
import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { showToast } from "../utils/toast";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState("");
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const loginUser = async (email, password) => {
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
                showToast("success","You logged in successfully");
            }

        } catch (error) {
            console.log(error);
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