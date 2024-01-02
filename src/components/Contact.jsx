import React from 'react';
import { IconButton } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import './contact.css';

const Contact = () => {
    const iconStyle = {
        color: 'white',
        border:'1px solid white',
        padding:'15px',
        margin:'10px'
      };
  return (
    <div className="contact">
      <h2>Let's get in touch!!</h2>
      <div className="contact-links">
        <IconButton style={iconStyle} title='Email' className='button' href="mailto:manjunathgpatil28@gmail.com">
          <EmailIcon />
        </IconButton>
        <IconButton style={iconStyle} title='Linkedin' className='button' href="https://www.linkedin.com/in/manjunathgoudapatil">
          <LinkedInIcon />
        </IconButton>
        <IconButton style={iconStyle} title='GitHub' className='button' href="https://github.com/manjupatil28">
          <GitHubIcon />
        </IconButton>
        <IconButton style={iconStyle} title='Twitter' className='button' href="https://twitter.com/mpmanju9">
          <TwitterIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Contact;
