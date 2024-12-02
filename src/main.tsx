//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'


import App from "./App";
import News from "./News";
import New from "./New";
import Register from "./Register";
import Login from "./Login";
//import NotFound from "./NotFound";
import Sport from "./Pages/Sport";
import Business from "./Pages/Business";
import Innovation from "./Pages/Innovation";
import Culture from "./Pages/Culture";
import Arts from "./Pages/Arts";
import Travel from "./Pages/Travel";
import Earth from "./Pages/Earth";

// import { RouterProvider } from 'react-router-dom'
// import { router } from './router.tsx'
import { NewsContextProvider } from './context/NewsContextProvider.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <NewsContextProvider>
//     <RouterProvider router={router} />
//     </NewsContextProvider>    
//   </StrictMode>,
// )

import { RouterProvider, createBrowserRouter } from "react-router-dom";
//import ReactDOM from "react-dom";
import React from "react";
import { createRoot } from "react-dom/client";


const router = createBrowserRouter([
  {
    path: "/vite-react-router/",
    element: <App />,
    children: [
      {
        path: "/vite-react-router/news/:id",
        element: <New urlToImage={""} title={""} content={""} publishedAt={""} topic={""}/>,
      },
      {
        path: "/vite-react-router/news",
        element: <News />,
      },
      {
        path: "/vite-react-router/",
        element: <News />,
      },
      {
        path: "/vite-react-router/register",
        element: <Register />,
      },
      {
        path: "/vite-react-router/login",
        element: <Login />,
      },
      {
        path: "/vite-react-router/news/Home",
        element: <News />,
      },
      {
        path: "/vite-react-router/news/Business",
        element: <Business />,
      },
      {
        path: "/vite-react-router/news/Sport",
        element: <Sport />,
      },
      {
        path: "/vite-react-router/news/Innovation",
        element: <Innovation />,
      },
      {
        path: "/vite-react-router/news/Culture",
        element: <Culture />,
      },
      {
        path: "/vite-react-router/news/Arts",
        element: <Arts />,
      },
      {
        path: "/vite-react-router/news/Travel",
        element: <Travel />,
      },
      {
        path: "/vite-react-router/news/Earth",
        element: <Earth />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <NewsContextProvider>
        <RouterProvider router={router} />
      </NewsContextProvider>   
  </React.StrictMode>
)


