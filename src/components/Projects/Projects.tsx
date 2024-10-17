import React, { useState } from 'react';
import projectData from '../../data/projectData.json'; // Caminho para o arquivo JSON

// Defina a interface dos projetos
interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  image: string;
}

function Projects() {
  const [projects] = useState<Project[]>(projectData); // Carregue os dados diretamente do JSON

  return (
    <div className="projects-container">
      {projects.length > 0 ? (
        projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={`${project.name} preview`} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
              Ver no GitHub
            </a>
          </div>
        ))
      ) : (
        <p>Nenhum projeto encontrado.</p>
      )}
    </div>
  );
}

export default Projects;
