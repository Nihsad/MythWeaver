import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Layout from './components/Layout/Layout.jsx';
import MythIndex from './components/MythIndex/MythIndex.jsx';
import UserProfile from './components/UserProfile/UserProfile.jsx';
import StoryIndex from './components/StoryIndex/StoryIndex.jsx';
import StorySplash from './components/StorySplash/StorySplash.jsx';
import CreateStory from './components/CreateStory/CreateStory.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Landing from './components/LandingPage/landing.jsx';
import ReadStory from './components/ReadStory/ReadStory.jsx';
import StoryEnd from './components/StoryEnd/StoryEnd.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1 className='display-2'>Wrong page!</h1>,
        children: [
            {
                path: '/',
                element: <Layout />,
                children: [
                    {
                        index: true,
                        element: <Landing />
                    }, {
                        path: '/myth-index',
                        element: <MythIndex />
                    }, {
                        path: '/user-profile',
                        element: <UserProfile />
                    }, {
                        path: '/story-index',
                        element: <StoryIndex />
                    }, {
                        path: '/story-splash',
                        element: <StorySplash />
                    }, {
                        path: '/create-story',
                        element: <CreateStory />
                    }, {
                        path: '/about-us',
                        element: <AboutUs />
                    }, {
                        path: '/read-story',
                        element: <ReadStory />
                    }, {
                        path: '/story-end',
                        element: <StoryEnd />
                    }
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
