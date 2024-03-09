/**Fetch question hook to fetch api data and set value to the store */

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

/**redux actions */
import * as Action from '../redux/question_reducer';
import { getServerData } from "../helper/helper";

export const useFetchQuestion = () =>{
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({Loading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetData(prev => ({...prev, Loading: true}));
        /**async function fetch backend data */
        (async () => {
            try {
                const [{questions, answers}] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data) =>data);
             
                if(questions.length > 0){
                    setGetData(prev => ({...prev, Loading: false}));
                    setGetData(prev => ({...prev, apiData: questions}));

                    /**dispatch an action */
                
                    dispatch(Action.startExamAction({ question: questions, answers}));

                }else{
                    throw new Error('No Question available');
                }
            } catch (error){
                setGetData(prev => ({...prev, Loading: false}));
                setGetData(prev => ({...prev, serverError: error}));
            }
        })();

    },[dispatch])

    return[getData,setGetData ]
}

/**MoveAction Dispatch Function */
export const moveNextQuestion = () => async (dispatch) => {
    try{
        dispatch(Action.moveNextAction());/**increase the trace by 1 */
    }catch (error){
        console.log(error)
    }
}


/**PreviousAction Dispatch Function */
export const movePreviousQuestion = () => async (dispatch) => {
    try{
        dispatch(Action.movePreviousAction()); /**decrease the trace by 1 */
    }catch (error){
        console.log(error)
    }
}
