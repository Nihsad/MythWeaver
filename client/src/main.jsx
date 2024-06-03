import ReactDOM from 'react-dom/client'; // Correct import for createRoot
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Tree from './components/Tree/index.jsx;'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import bootstrap or other css framework here if needed

import App from './App.jsx';
import Layout from './components/Layout/Layout.jsx';
import MythIndex from './components/MythIndex/MythIndex.jsx';
import UserProfile from './components/UserProfile/UserProfile.jsx';
import StoryIndex from './components/StoryIndex/StoryIndex.jsx';
import StorySplash from './components/StorySplash/StorySplash.jsx';
import CreateStory from './components/CreateStory/CreateStory.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Landing from './components/LandingPage/landing.jsx'; 

// import necessary pages here which will be rendered as elements in the children for react router

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
                element: <MythIndex />,
              },
              {
                path: 'user-profile',
                element: <UserProfile />,
              },
              {
                path: 'story-index',
                element: <StoryIndex />,
              },
              {
                path: 'story-splash',
                element: <StorySplash />,
              },
              {
                path: 'create-story',
                element: <CreateStory />,
              },
              {
                path: 'about-us',
                element: <AboutUs />,
              },
            ],
          },
        ],
      },
    ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)


