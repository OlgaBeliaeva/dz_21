import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Result.module.css'; 

const Result = () => {
    const score = useSelector((state) => state.questionnaire.score);

    return (
        <div className={styles.resultContainer}>
            <p>Your Score: {score}</p>
        </div>
    );
};

export default Result;