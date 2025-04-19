import React from 'react';
import project_thumb_2 from "../../../assets/projects/project_2.jpg";
const ViewDetails_2 = () => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl my-5 w-11/12 md:w-10/12 mx-auto">
      <figure>
        <img
          src={project_thumb_2}
          className="h-dvh"
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
          <h2 className="card-title text-3xl">EquiSports</h2>
          <p className="text-lg"><span className="text-orange-600">EquiSports</span> is a online platform based on sports equipment. This is similar of e-commerce website. Where users can visit, add to cart & order sport equipments and also add, update, delete, product details. There is also authentication system included. </p>
          <br />
          <div className='text-base'>
            <strong>Challenges:</strong>
            <li>While integrating third-party APIs or even your custom Express API, you might face CORS errors or inconsistent data structures.</li>
            <li>Managing State in React</li>
            <li>Restricting user access to admin routes (like product management) was tricky. Initially, everyone could access them if they knew the URL.</li>
            <li>Forms submitted with invalid inputs (like empty fields or wrong email format) led to server errors or app crashes.</li>
            <li>While deploying to platforms like Vercel (frontend) and Render or Railway (backend), environment variables like API keys weren’t working.</li>

          </div>
          <br />
          <div className='text-base'>
            <strong>Potential improvements and future plans:</strong>
            <li>To make better by adding Animation & funtionality</li>
            <li>Implement Real-time Features</li>
            <li>Advanced Search and Filtering</li>
            <li>Unit Testing & Automation</li>
            <li>Integrate Payment Gateway</li>
            <li>Admin Dashboard Enhancement</li>
          </div>
          <div className="card-actions justify-center mt-3">
            <a href="https://equisports-6c213.web.app/" target="_blank" className="btn btn-sm bg-emerald-600 text-white">Live Link</a>
            <a href="https://github.com/wadsahin/EquiSports-client" target="_blank" className="btn btn-sm bg-teal-600 text-white">Repo Link</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails_2;