import { useNavigate } from "react-router-dom";

import ProjectForm from "../../project/ProjectForm";

import styles from "./NewProjects.module.css";

function NewProject() {
  const history = useNavigate();

  function createPost(project) {
    //initialize cost and service
    project.cost = 0;
    project.service = [];

    fetch("htpp://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        //redirect
        history("/projects", { text: "projeto criado com sucesso!" });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projetos</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handlesubmit={NewProject} btnText="Criar Projeto" />
    </div>
  );
}

export default NewProject;
