import { BiLogoNetlify } from 'react-icons/bi';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { LiaLinkedinIn } from 'react-icons/lia';
import hero_img from "../../assets/images/profile-3.png";

const Hero = () => {
  const resumeLink = "https://drive.google.com/file/d/1LcabPuZUoa78SGi4jGbDl33O_dRVW04j/view?usp=sharing";
  return (
    <section id="home" className="py-10">
      {/* <!-- section container --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center content-between">
        {/* <!-- column 1 --> */}
        <div className="space-y-4">
          <p className="text-xl font-semibold">Hello, <span className="text-teal-500">I'm</span></p>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">Jharul Islam Sahin</h2>
          <h3 className="text-2xl sm:text-3xl text-white font-bold">A Full Stack Web Developer</h3>
          <p className="text-sm text-gray-400">With knowledge in web development and design, I offer the best projects
            resulting in quality work.</p>

          {/* <!-- Social Links --> */}
          <div className="flex gap-3">
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
          {/* <!-- btn --> */}
          <div>
            <a href={resumeLink} target="_blank" className="hidden sm:flex btn btn-sm btn-warning mt-5">Download resume</a>
          </div>
        </div>
        {/* <!-- column 2 --> */}
        <div className="w-9/12 mx-auto">
          <img className="rounded-full shadow-md shadow-teal-500" src={hero_img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;