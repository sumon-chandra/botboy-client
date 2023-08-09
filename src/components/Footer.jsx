import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaMap,
  FaPhone,
  FaEnvelope,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="text-white bg-gray-800 bg-gradient-to-br">
      <section className="grid-cols-1 gap-10 px-4 py-8 lg:grid-cols-4 footer lg:p-20">
        <div>
          <Link to="/" className="flex items-center select-none ps-4 lg:ps-0">
            <img className="w-8 mr-1" src={logo} alt="logo" />
            <span className="text-xl font-bold text-white uppercase lg:text-3xl font-head">
              Botboy
            </span>
          </Link>
          <p className="text-xs lg:text-lg">
            Nunc consequat interdum varius sit amet mattis. Ac tortor vitae
            purus faucibus ornare.
          </p>
        </div>
        <div>
          <h3 className="pb-4 text-2xl font-bold text-gray-500">We are here</h3>
          <p className="text-lg">
            No. 58 A, East Madison Street, Blatimore, MD, USA 4508
          </p>
          <button className="footer-btn">
            <FaMap />
            <span className="text-sm">View on map</span>
          </button>
        </div>
        <div>
          <h3 className="pb-4 text-2xl font-bold text-gray-500">Contact Us</h3>
          <button className="footer-btn">
            <FaPhone />
            <span>0000 - 123 - 347789</span>
          </button>
          <button className="footer-btn">
            <FaEnvelope />
            <span>info@example.com</span>
          </button>
        </div>
        <div>
          <h3 className="pb-4 text-2xl font-bold text-gray-500">
            Get us on social
          </h3>
          <div className="flex items-center gap-4">
            <button className="px-2 footer-btn text-mainColor">
              <FaFacebook />
            </button>
            <button className="px-2 footer-btn text-mainColor">
              <FaPinterest />
            </button>
            <button className="px-2 footer-btn text-mainColor">
              <FaInstagram />
            </button>
          </div>
        </div>
      </section>
      <div className="pb-3 text-xs text-center">
        <p>Copyright © 2023 - All right reserved by BOTBOY Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
