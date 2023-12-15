import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Reset } from 'styled-reset';
import App from './routes/App';
import Charactor from './routes/Charactor';
import Detail from './detail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/charactor/:id",
    element: <Detail />,
  },
  {
    path:"/:id",
    element: <App />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    // </React.StrictMode>
    <>
      <Reset />
      <RouterProvider router={router} />
    </>
);

// https://rapidapi.com/jakash1997/api/superhero-search/