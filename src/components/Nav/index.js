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
            <div className="w-full block justify-end lg:flex lg:items-center lg:w-auto">
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


