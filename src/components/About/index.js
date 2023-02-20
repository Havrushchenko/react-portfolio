import React from 'react';
import avatar from '../../assets/img/avatar.jpg';

export default function About() {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="flex items-center">
                <div className="max-h-96 md:h-screen">
                    <div className="flex md:flex-row sm:flex-col items-center bg-white p-10">
                        <div className="mb-auto mt-auto max-w-lg">
                            <h2 className="text-3xl font-bold text-gray-900 uppercase">Havrushchenko Volodya</h2>
                            <p className="font-semibold mb-5">Web Developer, Lviv (UA)</p>
                            <p className='text-sm text-gray-500'>I am a Full Stack Software engineer from Ukraine. Fast learner, obsessed with details and guality, always trying to
                            improve development process and code quality, I love simple and elegant solutions for every problem.</p>
                            <a href='mailto:havrushchenko@gmail.com'>
                            <button className="bg-gray-800 hover:bg-gray-700 rounded-md py-3 px-7 mt-6 text-white">Email Me</button>
                            </a>
                        </div>
                        <div className="avatar sm:">
                            <img src={avatar} style={{maxWidth: '300px', height: 'auto'}} alt="my avatar"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
