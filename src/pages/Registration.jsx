import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../context-providers/AuthProvider";
import { Link } from "react-router-dom";

const Registration = () => {
const {register} = useContext(AuthContext);

const handleSubmit = (e) => {
  e.preventDefault()
}

  return (
    <div className="hero min-h-screen lg:bg-[url('https://i.ibb.co/zSfz9Pf/pattern.png')]">
      <div className="hero-content flex-col">
        <div className="text-center pb-4">
          <h1 className="lg:text-5xl text-3xl text-mainColor font-bold">
            Register now!
          </h1>
        </div>
        <div className="card lg:w-96 border border-mainColor bg-base-200">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter a password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="lg:px-4 lg:py-2 text-lg text-white bg-gradient-to-br from-mainColor to-secColor rounded-md hover:bg-gradient-to-tl">
                Register
              </button>
            </div>
            <p className="divider">OR</p>
            <p className=" text-sm font-semibold flex items-center justify-center rounded gap-x-2 bg-indigo-100 border border-mainColor py-1 cursor-pointer">
              <FaGoogle /> 
              <span>Continue with Google</span>
            </p>
            <p className="text-xs mt-3">Already have an account? <Link to="/login" className="underline">Login now</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
