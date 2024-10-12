import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion } from '../features/questionnaire/questionnaireSlice';
import styles from './Question.module.css';

const Question = ({ questionId }) => {
    const dispatch = useDispatch();

    // Извлекаем вопрос из состояния на основе questionId
    const question = useSelector((state) =>
        state.questionnaire.questions.find((q) => q.id === questionId)
    );

    const handleAnswer = (answer) => {
        dispatch(answerQuestion({ questionId: question.id, answer }));
    };

     if (!question) {
        return null; 
    }

    return (
        <div className={styles.questionContainer}>
            <h3 className={styles.questionTitle}>{question.question}</h3>
            {question.options.map((option) => (
                <div className={styles.option} key={option}>
                    <input
                        type="radio"
                        id={`${questionId}-${option}`}
                        name={`question-${questionId}`}
                        className={styles.radioInput}
                        onChange={() => handleAnswer(option)}
                    />
                    <label className={styles.label} htmlFor={`${questionId}-${option}`}>
                        {option}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default Question;