import React from 'react'
import styles from './CustomError.module.css'

function CustomError({ error = null }) {
    return (
        <div className={styles.error__container}>
            {error === null ? <h3> ❌ Error en la solicitud </h3> : <h3> {error} </h3>}
        </div>
    )
}

export default CustomError