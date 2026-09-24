import { createBrowserRouter } from 'react-router-dom';
import  RootLayout from "./layout/RootLayout.jsx";
import  Home from "./pages/Home.jsx";
import  NewBuild from "./pages/NewBuild.jsx";
import  Profile from "./pages/Profile.jsx";
import  Signup from "./pages/Signup.jsx";
import  Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx"



export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: 'new-build', element: <NewBuild /> },
        { path: 'profile', element: <Profile /> },
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <Signup /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);