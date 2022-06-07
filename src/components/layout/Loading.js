import { ImSpinner2 } from 'react-icons/im'

import styles from './Loading.module.css';

function Loading() {

    return(
        <div className={styles.loader_container}>
            <ImSpinner2 className={styles.loader} />
        </div>
    )

}

export default Loading;