import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Home } from './pages/home';
import Campus from './pages/campus';

const router = createBrowserRouter([
    {
        path: 'home',
        element: <Home />,
    },
    {
        path: 'campus',
        element: <Campus />,
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
