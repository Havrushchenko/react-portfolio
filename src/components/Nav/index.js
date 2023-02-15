import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
            <div className="flex items-center flex-no-shrink mr-6">
                <span className="font-semibold text-xl tracking-tight">Havrushchenko Volodya</span>
            </div>
            <div className="block lg:hidden">
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="#responsive-header">
                    {categories.map((category) => (
                            <li
                                className={`block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-zinc-600 mr-4 ${
                                    currentCategory.name === category.name
                                    }`}
                                key={category.name}
                            >
                                <span
                                    onClick={() => setCurrentCategory(category)}
                                >
                                    {capitalizeFirstLetter(category.name)}
                                </span>
                            </li>
                        ))}
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;