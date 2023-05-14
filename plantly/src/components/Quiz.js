import React from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Question } from './QuestionTemplate.js';
import { Navigate } from 'react-router-dom';

export function Quiz() {
    // const navigate = useNavigate();

    // const navigateToQuestion = () => {
    //     navigate('./QuizResult.js');
    // }

    return (
        <div className="quiz-body">
            <div className="body-container">
                <div className="whyMe-picture-container">
                    <img className="whyMe-picture" src="img/peopleBeach.png" alt="tree picture"></img>
                </div>
            </div>
        </div>
    )
}