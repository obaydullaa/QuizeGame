import React from 'react';

export default function QuestionCard({quiz}){
    console.log(quiz)
    return (
        <>
            <h3 className="text-2xl">{quiz.question}</h3>
        </>
    );
}