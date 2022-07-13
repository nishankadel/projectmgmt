import React from "react";
import ProjectCard from "./ProjectCard";
import { GET_PROJECTS } from "../queries/projectQueries";
import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return "Error";
  }

  return (
    <>
    <h1>Projects</h1>
      {data.projects.length > 0 ? (
        <div className="row mt-4">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="row mt-4">
          <div className="col-12 text-center">
            <h2>No projects found</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
