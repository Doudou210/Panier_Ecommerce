import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log(formData);
                
                console.log("Connexion réussie");
            } else {
                console.log("Connexion échouée");
            }
        } catch (error) {
            console.error("Erreur lors de la communication avec le serveur:", error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center bg-primary">
            <div className="p-3 bg-white w-25">
                <form onSubmit={handleSubmit}>
                    <h1 style={{ textAlign: "center" }}>Sign In</h1>
                    <hr />
                    <div className="mb-3">
                        <label>Email </label>
                        <input 
                            type="text" 
                            placeholder="Email" 
                            name="email"
                            onChange={handleChange}
                            className="form-control" 
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            onChange={handleChange}
                            className="form-control" 
                        />
                    </div>
                    <button className="btn btn-default bg-success w-100">Sign In</button>
                    <Link to="/register">
                        <button type="button" className="btn btn-default bg-primary border w-100">Create Account</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
