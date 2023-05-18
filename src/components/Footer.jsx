import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaYoutube, FaTwitter, FaFacebook} from "react-icons/fa"
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-mainColor to-secColor text-white">
      <section className="footer p-10">
        <div >
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </section>
      <section className="footer px-10 py-4 border-t border-indigo-600">
        <div className="space-y-2">
          <a href="#" className="flex items-center select-none text-xl">
            <img className="w-10 mr-1" src={logo} alt="logo" />
            <span className="font-bold text-gray-800">Botboy</span>
          </a>
          <p>
            ACME Industries Ltd. <br />
            Providing reliable superhero toys since 1992
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-x-6">
            <a>
              <FaYoutube className="text-2xl shadow-lg cursor-pointer" />
            </a>
            <a>
              <FaFacebook className="text-2xl shadow-lg cursor-pointer" />
            </a>
            <a>
             <FaTwitter className="text-2xl shadow-lg cursor-pointer" />
            </a>
          </div>
        </div>
      </section>
      <div className="text-center pb-3">
        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
