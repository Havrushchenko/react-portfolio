import React from 'react';

export default function Resume() {
    return (
        <div class="flex items-center justify-center h-screen">
            <div class="resume flex bg-white p-10">
                <div class="max-w-lg">
                    <h2 class="text-3xl uppercase mb-5">Resume</h2>
                    <p class="front-end font-semibold mb-5">Front-end</p>
                    <ul className='text-sm text-gray-500'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Git</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>SASS</li>
                        <li>WordPress</li>
                    </ul>
                    <p class="back-end font-semibold mb-5">Back-end</p>
                    <ul className='text-sm text-gray-500'>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                        <li>MERN Stack</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
