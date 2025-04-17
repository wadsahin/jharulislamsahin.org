import { Link } from "react-router-dom";
import project_thumb_1 from "../../assets/projects/project_1.jpeg";
import project_thumb_2 from "../../assets/projects/project_2.jpg";
import project_thumb_3 from "../../assets/projects/project_3.png";
const ProjectCard = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {/* <div className="flex flex-wrap gap-3">
        <div className="badge badge-primary badge-outline">React</div>
        <div className="badge badge-primary badge-outline">Node</div>
        <div className="badge badge-primary badge-outline">Express</div>
        <div className="badge badge-primary badge-outline">Firebase</div>
        <div className="badge badge-primary badge-outline">Mongodb</div>
      </div> */}

      {/* <p className="text-lg"><span className="text-orange-600">TrendPicks</span> is a online platform based on products & Services query. I have created a Product Recommendation platform for recommending products . Where users can add, update, delete, product details, add recommendation & modify recommendation...more </p> */}

      {/* <p className="text-lg"><span className="text-orange-600">EquiSports</span> is a online platform based on sports equipment. This is similar of e-commerce website. Where users can visit, add to cart & order sport equipments and also add, update, delete, product details. There is also authentication system included...more </p> */}

      {/* <p className="text-lg"><span className="text-orange-600">Career Counselling</span> is a online platform based on Smart Career Solutions & Services. We will provide lots of services like Career counseling sessions, Resume review, Mock interview practice, Personal branding workshop and more </p> */}

      {/* Project card 1 */}
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="h-52">
          <img
            src={project_thumb_1}
            className="h-full hover:scale-110 hover:duration-500"
            alt="Shoes" />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title text-3xl">TrendPicks</h2>
          <div className="card-actions justify-center mt-3">
            <a href="https://product-recommendation-s-8704d.web.app/" target="_blank" className="btn btn-sm bg-emerald-600 text-white">Live Link</a>
            <a href="https://github.com/wadsahin/TrendsPick-client" target="_blank" className="btn btn-sm bg-teal-600 text-white">Repo Link</a>
            <Link to="/view-details/1" className="btn btn-sm bg-lime-600 text-white">View Details</Link>
          </div>
        </div>
      </div>
      {/* Project card 2 */}
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="h-52">
          <img
            src={project_thumb_2}
            className="hover:scale-110 hover:duration-500"
            alt="Shoes" />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title text-3xl">EquiSports</h2>
          <div className="card-actions justify-center mt-3">
            <a href="https://equisports-6c213.web.app/" target="_blank" className="btn btn-sm bg-emerald-600 text-white">Live Link</a>
            <a href="https://github.com/wadsahin/EquiSports-client" target="_blank" className="btn btn-sm bg-teal-600 text-white">Repo Link</a>
            <Link to="/view-details/2" className="btn btn-sm bg-lime-600 text-white">View Details</Link>
          </div>
        </div>
      </div>
      {/* Project card 3 */}
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="h-52">
          <img
            src={project_thumb_3}
            className="h-full hover:scale-110 hover:duration-500"
            alt="Shoes" />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title text-3xl">Career Counselling</h2>
          <div className="card-actions justify-center mt-3">
            <a href="https://career-counselling-e8f6c.web.app/" target="_blank" className="btn btn-sm bg-emerald-600 text-white">Live Link</a>
            <a href="https://github.com/wadsahin/Career-counseling-client" target="_blank" className="btn btn-sm bg-teal-600 text-white">Repo Link</a>
            <Link to="/view-details/3" className="btn btn-sm bg-lime-600 text-white">View Details</Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProjectCard;