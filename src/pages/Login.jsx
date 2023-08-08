import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context-providers/AuthProvider";
import useTitle from "../hooks/useTitle";
const Login = () => {
  const { login, loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  useTitle("Login");

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then(() => {
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(() => {
        setError("Something went wrong !");
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  };
  return (
    <div className="hero min-h-screen lg:bg-[url('https://i.ibb.co/zSfz9Pf/pattern.png')]">
      <div className="flex-col hero-content">
        <div className="pb-4 text-center">
          <h1 className="text-3xl font-bold lg:text-5xl font-head text-mainColor">
            Login now!
          </h1>
        </div>
        <div className="border card lg:w-96 border-mainColor bg-base-200">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
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
                required
                placeholder="Enter a password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="mt-6 form-control">
              {error && (
                <p className="mb-2 text-sm italic font-semibold text-red-600">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="text-lg text-white rounded-md lg:px-4 lg:py-2 bg-gradient-to-br from-mainColor to-secColor hover:bg-gradient-to-tl"
              >
                Login
              </button>
            </div>
            <p className="divider">OR</p>
            <p
              onClick={handleGoogleLogin}
              className="flex items-center justify-center py-1 text-sm font-semibold bg-indigo-100 border rounded cursor-pointer  gap-x-2 border-mainColor"
            >
              <FaGoogle />
              <span>Continue with Google</span>
            </p>
            <p className="mt-3 text-xs">
              Don't have any account?{" "}
              <Link to="/registration" className="underline">
                Register now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
