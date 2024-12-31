import { useState } from 'react'
import Navbar from './components/Navbar';
import HomepageCard from './components/HomepageCard';
import PhotoPortfolio from './components/PhotoPortfolio';
import VideoPortfolio from './components/VideoPortfolio';
import CommissionPortfolio from './components/CommissionPortfolio';
import ResumeCard from './components/ResumeCard';
import ContactCard from './components/ContactCard';
import Footer from './components/Footer';

import './styles/nav.css'

import '@fontsource/poppins/400.css'; // Regular
import '@fontsource/poppins/500.css'; // Medium
import '@fontsource/poppins/600.css'; // Semi-bold
import '@fontsource/poppins/700.css'; // Bold



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HomepageCard/>
      <PhotoPortfolio/>
      <VideoPortfolio/>
      <CommissionPortfolio/>
      <ResumeCard/>
      <ContactCard/>
      <Footer/>
    </>
  
  )
}

export default App
