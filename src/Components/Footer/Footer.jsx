import { BiLogoNetlify } from "react-icons/bi";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaTurnUp } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black py-10 lg:py-20 relative">
      <section className="w-11/12 lg:w-9/12 mx-auto">
        {/* <!-- Footer content --> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-3 items-center content-between">
          {/* <!-- footer column 1--> */}
          <div className="space-y-2 text-center md:text-start">
            <h2 className="text-3xl font-extrabold">Jharul Islam <span className="text-teal-500">Sahin</span></h2>
            <h3 className="text-xl text-white font-bold">Full-Stack Developer</h3>
          </div>
          {/* <!-- footer column 2-->
          <!-- Social Links --> */}
          <div className="flex gap-5 mx-auto md:m-0">
            <a className='border border-teal-500 p-1 rounded-full' href="https://www.facebook.com/profile.php?id=100048349835165" target="_blank">
              <FaFacebook size={30} />
            </a>
            <a className='border border-teal-500 p-1 rounded-full' href="https://www.linkedin.com/in/jharul-islam-sahin/" target="_blank">
              <LiaLinkedinIn size={30} />
            </a>
            <a className='border border-teal-500 p-1 rounded-full' href="https://github.com/wadsahin/" target="_blank">
              <FaGithub size={30} />
            </a>
            <a className='border border-teal-500 p-1 rounded-full' href="https://app.netlify.com/teams/wadsahinalom/sites" target="_blank">
              <BiLogoNetlify size={30} />
            </a>
          </div>
          {/* <!-- footer column 3--> */}
          <div>
            <p className="text-slate-400 text-center md:text-start">&copy; Copyright sahin alom. All rights reserved</p>
          </div>
        </div>
      </section>
      {/* <!-- up arrow --> */}
      <div className="absolute right-5 hidden md:block">
        {/* <Link to="#"><FaTurnUp size={26} /></Link> */}
      </div>
    </footer>
  );
};

export default Footer;