import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitAnswers } from './features/questionnaire/questionnaireSlice';
import Question from './components/Question';
import Result from './components/Result';
import buttonStyles from './components/Result.module.css'; 

const App = () => {
    const dispatch = useDispatch();
    const questions = useSelector((state) => state.questionnaire.questions);

    const handleSubmit = () => {
        dispatch(submitAnswers());
    };

    return (
      <div>
          <h1 style={{ marginLeft: '20px' }}>Questionnaire</h1>
          {questions.map((question) => (
              <Question key={question.id} questionId={question.id} />
          ))}
          <button className={buttonStyles.submitButton} onClick={handleSubmit}>
              Submit
          </button>
          <Result />
      </div>
  );
};

export default App;