import React from 'react';
import ProjectCard from '../../Components/Projects/ProjectCard';

const Projects = () => {
  return (
    <div className="mb-12">
      <div className="my-10">
        <h2 className="text-4xl font-bold">My Popular Projects</h2>
        <hr className="mt-5 mb-10" />
      </div>
      {/* Projects */}
      <div>
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;