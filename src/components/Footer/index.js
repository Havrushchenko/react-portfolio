import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const year = new Date().getFullYear();

function Footer() {
  const icons = [
    {
        name: "faCoffee} ",
        link: "https://github.com/sylviaprabudy"
    },
    {
        name: "fab fa-linkedin",
        link: "https://www.linkedin.com/public-profile/in/sylvia-prabudy-62984153"
    },
    {
        name: "fab fa-stack-overflow",
        link: "https://stackoverflow.com/users/13452330/sylvia-prabudy"
    }
]
  return (
    <footer>
    <div className="row">
    <div className="col-lg-8 mx-auto text-center">
        {icons.map(icon =>
            (
                <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
            )
        )}
    </div>
</div>
<div className='text-sm text-teal-lighter'>
  {`Copyright © ${year}`}</div>
  </footer>
  );
}

export default Footer;