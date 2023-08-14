import App from '@/App';
import Home from '@/page/home';
import Test from '@/page/test';
import ME from '@/page/ME';

import {createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
children:[ 
  {
    path:'/',
    element:<ME/>
  },  
{

  path:'/test',
  element:<Test/>
},
{
  path:'/Home',
  element:<Home/>
},

]
},


])

export default router
