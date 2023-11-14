import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Register = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero mt-10">
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-2xl font-bold text-center pt-4">Please Sign Up</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" />
                        </div>
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
                        </div>
                        <div className="form-control my-4">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <h3 className="text-center">Already have an account? <Link to="/login" className="text-lg text-red-500 font-semibold">Login</Link></h3>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;