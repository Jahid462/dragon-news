import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

    const { login } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        login(email, password)
            .then(() => {
                navigate(location?.state ? location.state : '/')
            })
            .catch()
    }
    

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero mt-10">
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-2xl font-bold text-center pt-4">Please Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control my-4">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <h3 className="text-center">Don&apos;t have an account? <Link to="/register" className="text-lg text-red-500 font-semibold">Sign Up</Link></h3>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;