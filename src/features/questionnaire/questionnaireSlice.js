import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    questions: [
        { id: 1, question: 'Question 1?', options: ['Option 1', 'Option 2'], answer: null },
        { id: 2, question: 'Question 2?', options: ['Option 1', 'Option 2'], answer: null },
        { id: 3, question: 'Question 3?', options: ['Option 1', 'Option 2'], answer: null },
        { id: 4, question: 'Question 4?', options: ['Option 1', 'Option 2'], answer: null },
        { id: 5, question: 'Question 5?', options: ['Option 1', 'Option 2'], answer: null },
    ],
    score: 0,
};

const questionnaireSlice = createSlice({
    name: 'questionnaire',
    initialState,
    reducers: {
        answerQuestion: (state, action) => {
            const { questionId, answer } = action.payload;
            const question = state.questions.find(q => q.id === questionId);
            if (question) {
                question.answer = answer;
            }
        },
        submitAnswers: (state) => {
            state.score = state.questions.filter(q => q.answer === 'Option 2').length; // Example scoring
        },
    },
});

export const { answerQuestion, submitAnswers } = questionnaireSlice.actions;

export default questionnaireSlice.reducer;