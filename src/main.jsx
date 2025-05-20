// import React from 'react';
import { createRoot } from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import './index.css';
// import LandingPage from './Pages/LandingPage/LandingPage';
// import Authentication from './Pages/Authentication/Authentication';   
// import Layout from './Layout';
import App from './App';



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path:'',
//         element:<LandingPage/> 
//       },
//       {
//         path:'/auth',
//         element:<Authentication/>

//       }
//     ]
//   }
// ])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} />  */}
    <App />
    </StrictMode> 
);
 