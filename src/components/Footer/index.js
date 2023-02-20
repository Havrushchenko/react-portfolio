import React from 'react';
import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import github from '../../assets/icons/github.png';
const year = new Date().getFullYear();

function Footer() {
    const icons = [
        {
            name: facebook,
            link: 'https://www.facebook.com/havrushchenko.volodya',
        },
        {
            name: instagram,
            link: 'https://instagram.com/soundslikefriendlyfire?igshid=MjkzY2Y1YTY=',
        },
        {
            name: github,
            link: 'https://github.com/Havrushchenko',
        },
    ]
    return (
        <section>
            <footer className="footer flex items-center justify-center bg-white p-6">
                {icons.map((icon) =>
                (
                    <div className="flex items-center justify-center block lg:flex lg:w-auto">
                        <a href={icon.link} target='_blank' className="mr-2 text-gray-800">
                            <img src={icon.name} className='w-5 h-5' aria-hidden="true" focusable="false" data-prefix="fab" alt='social media icon'></img>
                        </a>
                    </div>
                )
                )}
            </footer>
            <div className='flex justify-center text-sm text-gray-500 bg-white pb-6'>
                {`Copyright © ${year}`}</div>
        </section>
    );
}

export default Footer;