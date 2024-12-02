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
    path: "/NewsReact/",
    element: <App />,
    children: [
      {
        path: "news/:id",
        element: <New urlToImage={""} title={""} content={""} publishedAt={""} topic={""}/>,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "",
        element: <News />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "news/Home",
        element: <News />,
      },
      {
        path: "news/Business",
        element: <Business />,
      },
      {
        path: "news/Sport",
        element: <Sport />,
      },
      {
        path: "news/Innovation",
        element: <Innovation />,
      },
      {
        path: "news/Culture",
        element: <Culture />,
      },
      {
        path: "news/Arts",
        element: <Arts />,
      },
      {
        path: "news/Travel",
        element: <Travel />,
      },
      {
        path: "news/Earth",
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


