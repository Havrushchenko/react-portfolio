import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
<div className='text-sm text-teal-lighter'>
  {`Copyright © ${year}`}</div>
  </footer>
  );
}

export default Footer;