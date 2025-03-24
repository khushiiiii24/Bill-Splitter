import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import { FaUser } from "react-icons/fa";
import Instance from "./AxiosConfig";
import { useNavigate } from 'react-router-dom';
import Login from './Login';
function SignUp() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email_id: "",
        user_password: "",
    });
    function handleOnChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = Instance.post("/auth/register", { formData });
            if (response.staus === 201) {
                console.log("Registration Successful")
                navigate("/login");
            }
        } catch (error) {
            console.error("Registration Failed");
        }
    }

    return (
       
        <div><div className="login-container">
            <h2>Bill Splitter</h2>
            <p>Split your bills easily</p>
            <form onClick={handleSubmit}>

                    <input
                        type="text"
                        name="fname"
                        id="first_name"
                        value={formData.first_name}
                        placeholder="First Name"
                        onChange={handleOnChange}
                    ></input>

                    <input
                        type="text"
                        name="lname"
                        id="last_name"
                        value={formData.last_name}
                        placeholder="Last Name"
                        onChange={handleOnChange}
                    ></input>

                    <input
                        type="email"
                        name="email"
                        id="email_id"
                        value={formData.email_id}
                        placeholder="Email"
                        onChange={handleOnChange}
                    ></input>

                    <input
                        type="password"
                        name=" password"
                        id="user_password"
                        value={formData.user_password}
                        placeholder="Password"
                        onChange={handleOnChange}
                    ></input>

                    <button type="Sign In" value="Register"
                    ></button>

                </form>
            <p>Already have an account? <Link to="/Login">Login In</Link></p>
            </div>
        </div>
    )
}

export default SignUp
