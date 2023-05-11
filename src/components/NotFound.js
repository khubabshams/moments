import React from 'react'
import NoResults from "../assets/no-results.png";
import Asset from './Asset';
import styles from '../styles/NotFound.module.css'

const NotFound = () => {
    return (
        <div className={styles.Main}>
            <Asset src={NoResults} message="Sorry, the page you're looking for doesn't exist" />
        </div>
    )
}

export default NotFound