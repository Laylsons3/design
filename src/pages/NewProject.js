import ProjectForm from "../components/Form/ProjectForm";
import { useRouter } from 'next/router'

import styles from './NewProject.module.scss';

function NewProject() {

    const router = useRouter()

    function createPost(project) {


        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            // history.push('/projects', {message: 'Projeto criado com sucesso!'})
            router.push('/Projetos', { message: 'Projeto criado com sucesso!'})
        })
        .catch(err => console.log(err))

    }

    return(
        <div className={styles.new_project}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" /> 
        </div>

    )

}

export default NewProject;