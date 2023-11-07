import React, { useState } from "react";
import {Link} from "react-router-dom";
// import Bootstrap from "bootstrap";

const Register = ()=>{
    const [formData, setFormData] = useState({
        username:"",
        text:"",
        password:"",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/register', {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log("Connexion reussir");
            } else {
                console.log("Connexion échouer");
            }
        } catch (error) {
            console.error("Erreur lors de la comminication avec le serveur:", error)
        }
    }

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name] : value})
    }
    return(
        <div className="d-flex vh-100 justify-content-center align-items-center bg-primary">
            <div className="p-3 bg-white w-25">
                <form onSubmit={handleSubmit}>
                    <h1 style={{textAlign:"center"}}>Register</h1>
                    <hr />
                    <div className="mb-3">
                        <label>Email </label>
                        <input type="text" placeholder="Email" name="email" 
                        onChange={handleChange}
                        className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label>Username</label>
                        <input type="text" placeholder="Username" name="username"
                        onChange={handleChange}
                        className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="Password" name="password"
                        onChange={handleChange}
                        className="form-control"/>
                    </div>
                    <button className="btn btn-success w-100">Create Account</button>
                    <div className="check d-flex align-items-center justify-content-center p-1">
                        <input className="form-check-input p-1" type="checkbox" name="check" id="check" />
                        <label className="form-check-label p-1">You are agree to your terms and politices</label>
                    </div>
                    <Link to="/accueil"><button className="btn btn-default bg-light border w-100">Log In</button></Link>

                </form>
            </div>
        </div>
    )
};

export default Register;