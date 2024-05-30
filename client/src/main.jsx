// import ReactDOM from 'react-dom/client'
import ReactDOM from "react-dom";

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import bootstrap or other css framework here if needed

import App from './App.jsx'
import Tree from './components/Tree/index.jsx';
// import necessary pages here which will be rendered as elements in the children for react router

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1 className='display-2'>Wrong page!</h1>,
        children: [
            // We can replace these mock elements and paths when we have the real ones
            {
                // Added in element for TreeComponent - Haleigh
                index: true,
                element: <Tree />
            }, 
            // {
            //     path: '/some-path',
            //     element: <SomeElement />
            // }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)


