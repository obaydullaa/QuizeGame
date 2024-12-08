import React from "react";
import AnswerCard from "./AnswerCard";

export default function QuestionCard({ quiz, currentAnswers }) {
    console.log(quiz);
    return (
        <div className="container text-center sm mx-auto placeholder:bg-fuchsia-100 mt-10">
            <h3 className="text-2xl">{quiz.question}</h3>
            {currentAnswers.map((answer, i) => (
                <AnswerCard key={i} answer={answer} />
            ))}
        </div>
    );
}
