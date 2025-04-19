import { Link } from "react-router-dom";
import about_img from "../../assets/images/profile-1.png";
const AboutMe = () => {
  return (
    <section className="py-14 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* <!-- column 1 --> */}
        <div className="order-2 md:order-1 lg:w-10/12">
          <img className="rounded-xl shadow-md shadow-teal-500" src={about_img} alt="" />
        </div>
        {/* <!-- column 2--> */}
        <div className="space-y-4 order-1 md:order-2">
          <p className="text-xl font-semibold">My <span className="text-teal-500">Intro</span></p>
          <h2 className="text-4xl font-extrabold leading-tight">About Me</h2>
          <p className="text-base text-gray-400 text-">
            Hi there! My name is Jharul Islam Sahin. A results-driven Full-Stack Web Developer specializing in the MERN stack. With extensive experience in building scalable web applications, I leverage modern technologies like React, JavaScript, Node.js, Express.js, MongoDB, and Firebase authentication to craft cutting-edge solutions.<br /><br />
            I usually work on business or corporate websites, e-commerce websites, blogs and portfolio websites, and also educational websites. My favorite project is to do custom websites with dynamic features and functionalities. My extensive experience and specialty is creating dynamic, responsive, animated, and user-friendly front-end and back-end web applications.   
          </p>
          {/* <!-- btn --> */}
          <Link to="/contact" className="btn hover:bg-indigo-600 bg-teal-500 text-white border-none">Contact Me</Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;