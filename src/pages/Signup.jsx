import "./Account.css"
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../be/authContext";


export default function Signup() {


    const {signup} = useAuth()
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        setError("");
        const formEl = e.currentTarget;
        const formData = new FormData(formEl);
        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");

        if (!username.trim() || !email.trim() || password.length < 8) {
            setError("Fill in all fields. Password must be at least 8 characters.");
            return;
        }

        try{
            await signup(username, email, password);
            navigate("/");
        }
        catch(err){
            setError(err.message);
        }
    }

    return (
        <section className="acc">
            <div className="window">
                <h1 className="main-title">Create your account</h1>
                <div className="info-window">
                    <form className="form" onSubmit={handleSubmit} method="post">
                        <div className="field">
                            <label htmlFor="username">Username</label>
                            <input id="username" name="username" type="text" required minLength={3}/>
                        </div>

                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" type="email" required/>
                        </div>

                        <div className="field">
                            <label htmlFor="password">Password</label>
                            <input id="password" name="password" type="password" required minLength={8}/>
                        </div>

                        <button type="submit" className="button">Sign up</button>
                        <p className="error-text">{error}</p>
                    </form>
                    <Link to="/login" className="link">Already have an account? Sign in here</Link>
                </div>
            </div>
        </section>
    );
}