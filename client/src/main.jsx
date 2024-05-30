import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import bootstrap or other css framework here if needed

import App from './App.jsx'
import Layout from './components/Layout/Layout.jsx';
import MythIndex from './components/MythIndex/MythIndex.jsx';
import UserProfile from './components/UserProfile/UserProfile.jsx';
import StoryIndex from './components/StoryIndex/StoryIndex.jsx';
// import necessary pages here which will be rendered as elements in the children for react router

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1 className='display-2'>Wrong page!</h1>,
        children: [
            // We can replace these mock elements and paths when we have the real ones
            {
                index: true,
                element: <MythIndex />
            }, {
                path: '/user-profile',
                element: <UserProfile />
            }, {
                path: '/story-index',
                element: <StoryIndex />
            },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
