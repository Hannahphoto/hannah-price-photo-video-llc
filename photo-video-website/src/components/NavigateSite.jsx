import {useState} from 'react';
import HomePage from '../pages/HomePage';
import PhotoPage from '../pages/PhotoPage';
import VideoPage from '../pages/Videopage';
import CommissionPage from '../pages/CommissionPage';
import ResumePage from '../pages/ResumePage';
import ContactPage from '../pages/ContactPage';

export default function NavigateSite(){
    const [currentPage, setCurrentPage] =useState('HomePage');

    // depending on the value of the currentPage we return the responding component to render
    const renderPage = () => {
        if(currentPage === 'Home'){
            return <HomePage/>;
        }
        if(currentPage === 'Photography'){
            return <PhotoPage/>;
        }
        if(currentPage === 'Vido'){
            return <VideoPage/>;
        }
        if(currentPage === 'Commissions'){
            return <CommissionPage/>;
        }
        if(currentPage === 'CV'){
            return <ResumePage/>;
        }
        if(currentPage === 'Contact'){
            return <ContactPage/>;
        }
    }
    const handlePageChange = (page) => setCurrentPage(page);
    
    return (

    )
}