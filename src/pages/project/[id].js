import styles from '../Project.module.scss';

import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

function Project() {

    // const [project, setProject] = useState([]);
    const router = useRouter();
    const id = router.query.id;

    /* useEffect(() => [

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
        })
        .catch(err => console.log(err))

    ], [id]) */



    return(
        <div>
            <p>Minha id:{id}</p>
            {/* <p>Projeto: {project.name}</p> */}
        </div>
    )
}

export default Project