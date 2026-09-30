import "./Account.css"
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../be/authContext";

export default function Login() {

    const {login} = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        const formEl = e.currentTarget;
        const formData = new FormData(formEl);
        const username = formData.get("username");
        const password = formData.get("password");

        if (!username.trim() || password.length < 8) {
            setError("Fill in all fields. Password must be at least 8 characters.");
            return;
        }

        try{
            
            await login(username, password)
            navigate("/")
        }
        catch(err){
            setError(err.message);
        }
        
    }

    return (
        <section className="acc">
            <div className="window">
                <h1 className="main-title">Login into your account</h1>
                <form className="form" onSubmit={handleSubmit} method="post">
                        <div className="field">
                            <label htmlFor="username">Username</label>
                            <input id="username" name="username" type="text" required minLength={3}/>
                        </div>

                        <div className="field">
                            <label htmlFor="password">Password</label>
                            <input id="password" name="password" type="password" required minLength={8}/>
                        </div>

                        <button type="submit" className="button">Log in</button>

                        <p className="error-text">{error}</p>
                    </form>
                    <Link to="/signup" className="link">Don't have an account? Create one</Link>
            </div>
        </section>
    );
}