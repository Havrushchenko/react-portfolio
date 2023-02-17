import React from 'react';
import avatar from '../../assets/img/avatar.jpg';

export default function About() {
    return (
        <div class="flex items-center justify-center h-screen">
            <div class="flex items-center">
                <div class="max-h-96 md:h-screen">
                    <div class="flex bg-white p-10">
                        <div class="mb-auto mt-auto max-w-lg">
                            <h1 class="text-3xl uppercase">Havrushchenko Volodya</h1>
                            <p class="font-semibold mb-5">Web Developer, Lviv (UA)</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                            <button class="bg-black rounded-md py-3 px-7 mt-6 text-white">Email Me</button>
                        </div>
                        <div className="avatar">
                            <img src={avatar} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}