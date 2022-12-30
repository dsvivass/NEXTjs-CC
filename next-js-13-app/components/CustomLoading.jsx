import React from 'react'
import styles from './CustomLoading.module.css'

function CustomLoading () {

    return (
        <div className={styles.app}>
            <div className={styles.card}>
                <div className={styles.card__image}></div>
                <div className={styles.card__content}>
                    <h2 className={styles.card__title}></h2>
                    <p className={styles.card__description}></p>
                </div>
            </div>
        </div>
    )
}

export default CustomLoading