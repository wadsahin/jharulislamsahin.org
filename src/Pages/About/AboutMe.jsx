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
          <p className="text-sm text-gray-400 text-">
            <span className="text-2xl">A</span>ssalamualikum! I'm a Diploma Engineer from a Computer Science & Technology
            background, passionate
            about web development and modern programming. Recently, I completed my diploma where I delved into
            Programming, Web Development, Data Structures & Algorithms, and Database Management Systems among many other
            subjects. <br /><br />

            I'm currently venturing into MERN STACK Web Development. I've already mastered HTML, CSS, Responsive Web
            Design, and TailwindCSS, and I can confidently convert any Figma design into a web page, ensuring it is
            responsive and user-friendly. My roadmap includes mastering Modern JavaScript, React, Redux, Next.js,
            Node.js, Express.js, and MongoDB.
          </p>
          {/* <!-- btn --> */}
          <a className="btn hover:bg-indigo-600 bg-teal-500 text-white border-none" href="#">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;