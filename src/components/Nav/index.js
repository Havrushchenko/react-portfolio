import React from 'react';
import avatar from '../../assets/img/avatar.jpg';

function Nav({ currentPage, handlePageChange }) {
    return (
        <nav className="relative bg-white">
            <div className='flex items-center justify-between flex-wrap bg-white p-6'>
            <a href='#about' onClick={() => handlePageChange('About Me')} className="flex items-center flex-no-shrink mr-6">
                <img className="w-10 h-10 rounded-full mr-6" src={avatar} alt="Rounded avatar"></img>
                <span className="text-3xl uppercase">Havrushchenko Volodya</span>
            </a>
            <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            <div className="w-full hidden block justify-end lg:flex lg:items-center lg:w-auto" id="mobile-menu-2">
                <div className="lg:flex-grow">
                    <a
                        href="#about"
                        onClick={() => handlePageChange('About Me')}
                        className={currentPage === 'About Me' ? 'block mt-4 lg:inline-block lg:mt-0  text-sm text-gray-800 mr-4 uppercase' : 'block mt-4 lg:inline-block lg:mt-0  mr-4 text-sm text-gray-500 uppercase'}
                    >
                        About Me
                    </a>
                </div>
                <div className="lg:flex-grow">
                    <a
                        href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'block mt-4 lg:inline-block lg:mt-0  text-sm text-gray-800 mr-4 uppercase' : 'block mt-4 lg:inline-block lg:mt-0  mr-4 text-sm text-gray-500 uppercase'}
                    >
                        Portfolio
                    </a>
                </div>
                <div className="lg:flex-grow">
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'block mt-4 lg:inline-block lg:mt-0  text-sm text-gray-800 mr-4 uppercase' : 'block mt-4 lg:inline-block lg:mt-0  mr-4 text-sm text-gray-500 uppercase'}
                    >
                        Contact
                    </a>
                </div>
                <div className="lg:flex-grow">
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'block mt-4 lg:inline-block lg:mt-0  text-sm text-gray-800 mr-4 uppercase' : 'block mt-4 lg:inline-block lg:mt-0  mr-4 text-sm text-gray-500 uppercase'}
                    >
                        Resume
                    </a>
                </div>
            </div>
            </div>
        </nav>
    );
}

export default Nav;













// function Nav(props) {
//     const {
//         categories = [],
//         setCurrentCategory,
//         currentCategory,
//     } = props;

//     useEffect(() => {
//         document.title = capitalizeFirstLetter(currentCategory.name);
//     }, [currentCategory]);

//     return (
//         <nav classNameName="flex items-center justify-between flex-wrap bg-teal p-6">
//             <div classNameName="flex items-center flex-no-shrink mr-6">
//                 <img classNameName="w-10 h-10 rounded-full mr-6" src={avatar} alt="Rounded avatar"></img>
//                 <span classNameName="text-3xl uppercase">Havrushchenko Volodya</span>
//             </div>
//             <div classNameName="w-full block justify-end lg:flex lg:items-center lg:w-auto">
//                 <div classNameName="lg:flex-grow">
//                     <a href="#">
//                         {categories.map((category) => (
//                             <li
//                                 classNameName={`block mt-4 lg:inline-block lg:mt-0  mr-4 uppercase ${currentCategory.name === category.name && 'underline'
//                                     }`}
//                                 key={category.name}
//                             >
//                                 <span
//                                     onClick={() => setCurrentCategory(category)}
//                                 >
//                                     {capitalizeFirstLetter(category.name)}
//                                 </span>
//                             </li>
//                         ))}
//                     </a>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Nav;


