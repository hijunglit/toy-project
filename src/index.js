import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Reset } from 'styled-reset';
import Root from './routes/root';
import Charactor from './routes/Charactor';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "charactor/:id",
    element: <Charactor />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    // </React.StrictMode>
    <>
      <Reset />
      <RouterProvider router={router}/>
    </>
);

// https://rapidapi.com/jakash1997/api/superhero-search/