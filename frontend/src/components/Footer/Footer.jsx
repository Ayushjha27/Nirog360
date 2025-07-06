import React from 'react'
import "./Footer.css"

import PhoneIcon from '@mui/icons-material/Phone';

import LanguageIcon from '@mui/icons-material/Language';

import CloudIcon from '@mui/icons-material/Cloud';

const Footer = () => {

    const todayDate = new Date()
    return (
        <div className='footer'>

            <div className='foooter-left'>

                <img className='footer-logo' src='https://www.pngitem.com/pimgs/m/218-2184384_mnnit-allahabad-logo-hd-png-download.png' />


                <div className='footer-text-white'>Motilal Nehru National Institute of Technology</div>

                <div className='footer-text-white'>Allahabad</div>

                <div className='footer-text-smaller'> Prayagraj - 211004, INDIA </div>

                <div className='footer-text-smaller'><PhoneIcon /> 91-0532-2545404, 2545407 </div>

                <div className='footer-text-smaller'><LanguageIcon /> www.mnnit.ac.in</div>

            </div>

            <div className='foooter-center'>

                <div className='important-link'>Important Links</div>

                <a href='https://www.mnnit.ac.in/index.php/anti-ragging' target='_blank'>Anti-Ragging Initiative</a>

                <a href='https://tpo.mnnit.ac.in/tnp' target='_blank'>Career Counselling and Placement Section</a>

                <a href='https://alumni.mnnit.ac.in' target='_blank'>Alumi Portal</a>

                <a href='https://www.mnnit.ac.in/index.php/cell/equal-opportunity-cell-eoc' target='_blank'>Special Cell</a>

                <a href='https://www.mnnit.ac.in/index.php/cell/grievance-cell' target='_blank'>Grievance Cell</a>

                <a href='https://www.mnnit.ac.in/index.php/contact-us' target='_blank'>Contact Us</a>

                <a href='https://www.mnnit.ac.in' target='_blank'>College Official Website</a>

            </div>

            <div className='footer-right'>
            
                <div className='footer-right-name'><CloudIcon/>MNNIT Allahabad</div>
                
                <div className='today-date-footer'>{todayDate.toDateString()}</div>
                
            </div>
        </div>
    )
}

export default Footer