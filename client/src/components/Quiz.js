import React, { useEffect, useState } from 'react';
import Questions from './Questions';

import { moveNextQuestion, movePreviousQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';


/**redux store import */
import { useSelector, useDispatch } from 'react-redux';
import {Navigate} from 'react-router-dom'

export default function Quiz() {


    const [check, setChecked] = useState(undefined);


    const result = useSelector(state => state.result.result);
    const {queue, trace} = useSelector(state => state.questions);
    const dispatch = useDispatch();



/**Next button event handler */
    function onNext() {


        if(trace < queue.length){
             /**update the trace value by one using move next action */
        dispatch(moveNextQuestion());


        /**insert a new  in the array */
        if(result.length <= trace){
            dispatch(PushAnswer(check))
            }
       
        }
        /**reset the value of the checked variable */
        setChecked(undefined)
    }

/**Previous button event handler */

    function onPrev() {
        console.log('On Previous click')

        if(trace > 0){
          /**update the trace value by minus one using move previous action */
          dispatch(movePreviousQuestion())
        }
    }


function onChecked(check){
    console.log(check)
    setChecked(check)
}

/**Finished exam after the last question */
if(result.length && result.length >= queue.length){
    return <Navigate to={'/result'} replace={"true"}></Navigate>
}



    return(
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>

            {/*Displasy Questions*/}

            <Questions onChecked = {onChecked}></Questions>


            <div className='grid'>
                {trace > 0 ? <button className='btn prev' onClick={onPrev}>Prev</button> :<div></div>} 
                <button className='btn next' onClick={onNext}>Next</button>            
            </div>
        </div>
    );
}

