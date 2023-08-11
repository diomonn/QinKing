import App from '@/App';
import Home from '@/page/home';
import Test from '@/page/test';

import {createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
children:[{
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
