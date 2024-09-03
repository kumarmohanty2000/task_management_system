import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject"
function App() {
  const [projectState, setProjectState] = useState({
    isProject: undefined,
    projectList: [],
  });

  function handleProject() {
    setProjectState((preState) => {
      return {
        ...preState,
        isProject: null,
      };
    });
  }

  function handleSelectProject(id){
    setProjectState((preState) => {
      console.log(id);

      return {
        ...preState,
        isProject: id,
       
        
      };
    });
  }

  function handleCancel() {
    setProjectState((pre)=>
    {
      return{
        ...pre,
        isProject: undefined
      }
    })
    
  }

  function handleAddProject(projectData) {
    setProjectState((preState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...preState,
        // isProject:undefined,
        projectList: [...preState.projectList, newProject],
      };
    });
  }

  console.log(projectState);
  
  const selectedProject = projectState.projectList.find(project => project.id === projectState.isProject)

  let content = <SelectedProject project={selectedProject}/> ;

  if (projectState.isProject === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  } else if (projectState.isProject === undefined) {
    content = <NoProjectSelected handleChange={handleProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar handleChange={handleProject} 
      projects={projectState.projectList} 
      onSelectProject={handleSelectProject}
      selectedProjectId={projectState.isProject}/>
      {content}
    </main>
  );
}

export default App;
