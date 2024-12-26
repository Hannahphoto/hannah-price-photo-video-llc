import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/red-hat-mono'; // Defaults to 400 weight
import 'foundation-sites/dist/css/foundation.min.css'; //foundation framework
import { Grid, Cell,Menu,MenuItem } from "react-foundation";
import App from './App.jsx'

//bring in the pages so the router will show appropriate view/page


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
