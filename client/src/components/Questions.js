import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/**Custom Hook */
import { useFetchQuestion } from '../hooks/FetchQuestion';

import { updateResultAction } from '../redux/result_reducer';

export default function Question({onChecked}) {

    const [checked, setChecked] = useState(undefined);
    const {trace} = useSelector(state => state.questions);
    const result = useSelector(state => state.result.result);
    const [{Loading, apiData, serverError}] = useFetchQuestion()
    
    useSelector(state => console.log(state));


    const questions = useSelector(state => state.questions.queue[state.questions.trace]);
    const dispatch = useDispatch()



useEffect(() => {

    dispatch(updateResultAction({trace, checked}))
},[checked])


    function onSelect (i){
    
        onChecked(i)
        setChecked(i)
        dispatch(updateResultAction({trace, checked}))
    }

    if(Loading) return <h3 className = 'text-light'>Loading</h3>
    
    if (serverError) return <h3 className='text-light'>{serverError.message || "Unknown Error"}</h3>;





    return(
        <div className='questions'>
            <h2 className='text-light'>{questions?.question}</h2>

            <ul key={questions?.id}>
          {
            questions?.options.map((q, i) => (
                <li key={i}>
                <input
                type="radio"
                value={false}
                name="options"
                id={`q${i}-option`}
                onChange={() => onSelect(i)}
                />

                <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                <div className={`check ${result[trace] == i ?'checked': '' }`}></div>
            </li>
            ))
          }
            </ul>

        </div>
    );
}