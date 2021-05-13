import React from 'react';
import { faGithub,faLinkedin,faEmail } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer my-5 text-center text-white-50 mono-text ">

<div className="social">
          
                <a href="https://github.com/AtiQ-Rahman"
                   target="_blank" rel="noreferrer"  className="facebook social">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                <a href="https://www.linkedin.com/in/md-atiquer-rahman-337204145/"  target="_blank" rel="noreferrer" className="twitter social">
                    
                    <FontAwesomeIcon  icon={faLinkedin} size="2x" />
                    </a>
            </div>
        
          {/* <a className="footer-name text-white-50" href="https://github.com/yeatun"><FontAwesomeIcon icon={faGithub} /><br /></a> */}
            
         

          
            <a className="footer-name text-white" >Customized,Designed by Md Atiquer Rahman</a>
        </div>
    );
};

export default Footer;