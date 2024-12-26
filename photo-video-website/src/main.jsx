import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/red-hat-mono'; // Defaults to 400 weight
import 'foundation-sites/dist/css/foundation.min.css'; //foundation framework
import { Grid, Cell,Menu,MenuItem } from "react-foundation";
import App from './App.jsx'

//bring in the pages so the router will show appropriate view/page
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage.jsx';
import PhotoPage from './pages/PhotoPage.jsx';
import VideoPage from './pages/Videopage.jsx';
import CommissionPage from './pages/CommissionPage.jsx';
import ResumePage from './pages/ResumePage.jsx';
import ContactPage from './pages/ContactPage.jsx';


const router createRoot([
    {
      path: '/',
      element:<HomePage/>,
      errorElement: <ErrorPage/>,
    },
    {
      path: '/',
      element:<PhotoPage/>,
      errorElement: <ErrorPage/>,
    },
    {
      path: '/',
      element:<VideoPage/>,
      errorElement: <ErrorPage/>,
    },
    {
      path: '/',
      element:<CommissionPage/>,
      errorElement: <ErrorPage/>,
    },
    {
      path: '/',
      element:<ResumePage/>,
      errorElement: <ErrorPage/>,
    },  {
      path: '/',
      element:<ContactPage/>,
      errorElement: <ErrorPage/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
