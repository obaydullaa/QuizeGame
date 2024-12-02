App.jsx 
======================================================
import { useState } from "react";
import QuestionCard from "./QuestionCard";

function App() {
    const [quizzes, setQuizzes] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [startQuiz, setStartQuiz] = useState(false);
    const [currentAnswers, setCurrentAnswers] = useState(null);
    const [currentQuestionsIndex, setCurrentQuestionsIndex] = useState(0);
    const fetchQuiz = async () => {
        const res = await fetch(
            "https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple"
        );
        const { results } = await res.json();
        setQuizzes(results);
        setLoaded(true);
        setStartQuiz(true);
        console.log(results);
    };
    return (
        <div className="container text-center sm mx-auto placeholder:bg-fuchsia-100 mt-10">
            <h1 className="text-3xl font-bold">React Quiz Application</h1>
            {
            !startQuiz &&  <button onClick={fetchQuiz} className="mt-5 py-2 px-7 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
                Star Quiz
            </button>
            }
           
            {loaded && <QuestionCard quiz={quizzes[currentQuestionsIndex]}/>}            
        </div>
    );
}

QuestionCard.jsx 
==========================================================
import React from 'react';

export default function QuestionCard({quiz}){
    console.log(quiz)
    return (
        <>
            <h3 className="text-2xl">{quiz.question}</h3>
        </>
    );
}