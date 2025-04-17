import React from 'react';
import project_thumb_1 from "../../../assets/projects/project_1.jpeg";

const ViewDetails_1 = () => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl my-5">
      <figure>
        <img
          src={project_thumb_1}
          className="h-full"
          alt="Shoes" />
      </figure>
      <div className="card-body text-black">
        <div className="flex flex-wrap gap-3">
          <div className="badge badge-primary badge-outline">React</div>
          <div className="badge badge-primary badge-outline">Node</div>
          <div className="badge badge-primary badge-outline">Express</div>
          <div className="badge badge-primary badge-outline">Firebase</div>
          <div className="badge badge-primary badge-outline">Mongodb</div>
        </div>
        <div className='text-black'>
          <h2 className="card-title text-3xl">TrendPicks</h2>
          <p className="text-lg"><span className="text-orange-600">TrendPicks</span> is a online platform based on products & Services query. I have created a Product Recommendation platform for recommending products . Where users can add, update, delete, product details, add recommendation & modify recommendation.</p>
          <div className="card-actions justify-center mt-3">
            <a href="https://product-recommendation-s-8704d.web.app/" target="_blank" className="btn btn-sm bg-emerald-600 text-white">Live Link</a>
            <a href="https://github.com/wadsahin/TrendsPick-client" target="_blank" className="btn btn-sm bg-teal-600 text-white">Repo Link</a>
            {/* <Link to="/view-details/1" className="btn btn-sm bg-lime-600 text-white">View Details</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails_1;