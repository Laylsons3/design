import { useState, useEffect } from 'react';
import Loading from '../components/layout/Loading';
import Message from '../components/layout/Message';
import ProjectCard from '../project/ProjectCard';
import Link from 'next/link';

import styles from './Projetos.module.scss';

function Projetos() {

    const [projects, setProjects] = useState([]);
    const [projectMessage, setProjectMessage] = useState('');

    const [removeLoading, setRemoveLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
        }, 300)
    }, [])

    function removeProject(id) {

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then(() => {
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto removido com sucesso!')
        })

        .catch((err) => console.log(err))
    }

    return(
        <div className={styles.project}>
            <h1>Meus Projetos</h1>

            <div className={styles.criar_projetos}>
                <Link href="/NewProject">
                    <a> Criar Projeto</a>
                </Link>
            </div>

            <Message msg="Projeto criado com sucesso!" type="success" />

            { projectMessage && <Message type="success" msg={projectMessage} /> }

            <div style={{display:'flex'}}>
            { projects.length > 0 && 
            projects.map((project) => (
                <ProjectCard 
                id={project.id}
                name={project.name} 
                budget={project.budget}
                category={project.category.name}
                key={project.id}
                handleRemove={removeProject}
                />
            ))}
            { !removeLoading && <Loading /> }
            { removeLoading && projects.length === 0 && (
                <p>Não há projetos cadastrados!</p>
            )}
            </div>

        </div>
    )
}

export default Projetos;