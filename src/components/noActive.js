import React from 'react'
import styles from '../styles/Home.module.scss'
function NoActive (props) {
  return (
    <div className={styles.activeContainer}>
      <h3>Active Now</h3>
      <div className={styles.infoContainer}>
        <p className={styles.subtitleStatus}>Por ahora está todo tranquilo...</p>
        <p className={styles.textStatus}>Cuando un amigo empiece a realizar una actividad, como jugar o hablar por voz, ¡te lo mostraremos aquí!</p>
      </div>
    </div>
  )
}

export default NoActive
