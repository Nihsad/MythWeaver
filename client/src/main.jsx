// import ReactDOM from 'react-dom/client'
import ReactDOM from "react-dom";

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import bootstrap or other css framework here if needed

<<<<<<< HEAD
import App from './App.jsx'
import Tree from './components/Tree/index.jsx';
=======
import App from './App.jsx';
import Layout from './components/Layout/Layout.jsx';
import MythIndex from './components/MythIndex/MythIndex.jsx';
import UserProfile from './components/UserProfile/UserProfile.jsx';
import StoryIndex from './components/StoryIndex/StoryIndex.jsx';
import TreeComponent from './components/Tree/TreeComponent.jsx';

>>>>>>> 601d6681b9f51f4a3569c39ca0d009c195687b0a
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
<<<<<<< HEAD
                element: <Tree />
=======
                element: <MythIndex />
            }, {
                path: '/user-profile',
                element: <UserProfile />
            }, {
                path: '/story-index',
                element: <StoryIndex />
            }, {
                element: <TreeComponent />
>>>>>>> 601d6681b9f51f4a3569c39ca0d009c195687b0a
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


