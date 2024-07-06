import Card from '../components/Card';

const Projects = () => {
  const projectData = [
    { id: 1, name: 'Project 1', description: 'Description for project 1' },
    { id: 2, name: 'Project 2', description: 'Description for project 2' },
    { id: 3, name: 'Project 3', description: 'Description for project 3' },
    { id: 4, name: 'Project 4', description: 'Description for project 4' },
    { id: 5, name: 'Project 5', description: 'Description for project 5' },
    { id: 6, name: 'Project 6', description: 'Description for project 6' },
    { id: 7, name: 'Project 7', description: 'Description for project 7' },
    { id: 8, name: 'Project 8', description: 'Description for project 8' },
  ];

  return (
    <div id="projects" className="App flex flex-col h-screen items-center justify-center p-4 bg-black">
      <h1 className="font-tech text-5xl mb-8 text-white">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-screen-xl">
        {projectData.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;