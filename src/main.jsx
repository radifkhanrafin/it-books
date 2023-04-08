import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import About from './components/About';
import Home from './components/Home/Home';
import Books from './components/Books/Books';
import Book_Details from './components/Book-Details/Book_Details';
import Spinner from './components/Spinner/Spinner';
import Error_Massage from './components/Error_Massage/Error_Massage';

const route = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement:<Error_Massage></Error_Massage>,
        // errorElement: <p>errroe</p>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'books',
                element: <Books></Books>,
                loader: () => fetch('https://api.itbook.store/1.0/new')

            },
            {
                path: 'book/:id',
                element: <Book_Details></Book_Details>,
                loader: ({ params }) =>
                    fetch(`https://api.itbook.store/1.0/books/${params.id}`),
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'spinner',
                element: <Spinner></Spinner>
            },
        ]

    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={route} />
    </React.StrictMode>
)
