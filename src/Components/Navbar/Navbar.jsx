import { NavLink } from "react-router-dom";

const Navbar = () => {
  const resumeLink = "https://drive.google.com/file/d/1Q9xpnoN1kbnCfy44xnQSb4GdrSN_9OJJ/view?usp=sharing";
  const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about-me">About Me</NavLink></li>
    <li><NavLink to="/skills">Skills</NavLink></li>
    <li><NavLink to="/projects">Projects</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>

  </>
  return (
    <div className="navbar py-5">
      <div className="navbar-start">
        <a className="text-4xl font-bold">Port<span className="text-orange-400">folio</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <div>
          <a href={resumeLink} target="_blank" className="hidden sm:flex btn btn-sm btn-warning">Download resume</a>
        </div>
        {/* <!-- dropdown menu --> */}
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            {/* <i className="fa-solid fa-bars-staggered text-2xl"></i>
             */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-30 mt-3 w-52 p-2 shadow right-0 gap-2 text-black font-semibold">
            {navLinks}
            {/* <button className="sm:hidden btn btn-sm btn-warning">Download resume</button> */}
            <div>
              <a href={resumeLink} target="_blank" className="btn btn-sm btn-warning w-full">Download resume</a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;