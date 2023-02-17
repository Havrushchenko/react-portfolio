import React from 'react';
import avatar from '../../assets/img/avatar.jpg';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function Nav({ currentPage, handlePageChange }) {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
            <div className="flex items-center flex-no-shrink mr-6">
                <img className="w-10 h-10 rounded-full mr-6" src={avatar} alt="Rounded avatar"></img>
                <span className="text-3xl uppercase">Havrushchenko Volodya</span>
            </div>
            <div className="w-full block justify-end lg:flex lg:items-center lg:w-auto">
                <div className="lg:flex-grow">
                    <a
                        href="#about"
                        onClick={() => handlePageChange('About Me')}
                        //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

                        className={currentPage === 'About Me' ? 'block mt-4 lg:inline-block lg:mt-0  text-sm text-gray-800 mr-4 uppercase' : 'block mt-4 lg:inline-block lg:mt-0  mr-4 text-sm text-gray-500 uppercase'}
                    >
                        About Me
                    </a>
                </div>
                <div className="lg:flex-grow">
                    <a
                        href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

                        className={currentPage === 'Portfolio' ? 'block mt-4 lg:inline-block lg:mt-0  text-sm text-gray-800 mr-4 uppercase' : 'block mt-4 lg:inline-block lg:mt-0  mr-4 text-sm text-gray-500 uppercase'}
                    >
                        Portfolio
                    </a>
                </div>
                <div className="lg:flex-grow">
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

                        className={currentPage === 'Contact' ? 'block mt-4 lg:inline-block lg:mt-0  text-sm text-gray-800 mr-4 uppercase' : 'block mt-4 lg:inline-block lg:mt-0  mr-4 text-sm text-gray-500 uppercase'}
                    >
                        Contact
                    </a>
                </div>
                <div className="lg:flex-grow">
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

                        className={currentPage === 'Resume' ? 'block mt-4 lg:inline-block lg:mt-0  text-sm text-gray-800 mr-4 uppercase' : 'block mt-4 lg:inline-block lg:mt-0  mr-4 text-sm text-gray-500 uppercase'}
                    >
                        Resume
                    </a>
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
//         <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
//             <div className="flex items-center flex-no-shrink mr-6">
//                 <img className="w-10 h-10 rounded-full mr-6" src={avatar} alt="Rounded avatar"></img>
//                 <span className="text-3xl uppercase">Havrushchenko Volodya</span>
//             </div>
//             <div className="w-full block justify-end lg:flex lg:items-center lg:w-auto">
//                 <div className="lg:flex-grow">
//                     <a href="#">
//                         {categories.map((category) => (
//                             <li
//                                 className={`block mt-4 lg:inline-block lg:mt-0  mr-4 uppercase ${currentCategory.name === category.name && 'underline'
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


