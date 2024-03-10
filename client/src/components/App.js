import '../styles/App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

/**import components */

import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import {CheckUserExist} from '../helper/helper';
import LandingPage from './LandingPage';






/**react routes */
const router = createBrowserRouter([
  {
    path: '/', // Add this line
    element: <LandingPage /> // And this line
  },
  {
    path: '/main',
    element: <Main></Main>
  },
  {
    path: '/quiz',
    element: <CheckUserExist><Quiz></Quiz></CheckUserExist>
  },

  {
    path: '/result',
    element: <CheckUserExist><Result></Result></CheckUserExist>
  }

])



function App() {
  return (
   <>
    <RouterProvider router={router}/> 
   </>
  );
}

export default App;
