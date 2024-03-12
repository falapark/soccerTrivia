import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/Main.css'
import { setUserId } from '../redux/result_reducer';

import { Link } from 'react-router-dom';

export default function Main() {
    const inputRef = useRef(null);
    const dispatch = useDispatch()


    return(
    <div className='container'>
        <h1 className="title text-light">Trivia Soccer</h1>
        ...
        <ol>
            <li>You will be asked 20 questions one after another.</li>
            <li>You will be awareded 1 point for correct answer</li>
            <li>Each question has 4 options. You can choose only one options.</li>
            <li>You can review and change answers before the quiz finishes.</li>
            <li>The result will be declared at the end of the quiz.</li>
            <li>Enter a username and e-mail to register OR if you already have an account simply click log-in</li>
        </ol>

        <form id="form">
            <input ref={inputRef} className='userid' type="text" placeholder='Username*' />
        </form>

        <div className='start'>
            <Link to="/quiz" className='btn' onClick={() => {
                if(inputRef.current?.value) {
                    dispatch(setUserId(inputRef.current?.value));
                }
            }}>Start Quiz</Link>
        </div>
       


    </div>
    );
}
