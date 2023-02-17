import React from 'react';
import avatar from '../../assets/img/avatar.jpg';

export default function Contact() {
    return (
        <div class="contact-form flex items-center justify-center h-screen">
            <div class="flex items-center">
                <div class="flex bg-white p-10">
                    <div class="mb-auto mt-auto max-w-lg">
                        <div class="mb-6">
                            <label for="email" class="block mb-2 font-semibold mb-5">Your email</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required></input>
                        </div>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 font-semibold mb-5">Your name</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Name" required></input>
                        </div>
                        <div>
                            <label for="about" class="font-semibold mb-5">Your message</label>
                            <div class="mt-1">
                                <textarea id="about" name="about" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Your message"></textarea>
                            </div>
                            <p class="mb-6 mt-2 text-sm text-gray-500">Write a few sentences to me.Or simply send me an email at: <a href='mailto:havrushchenko@gmail.com'>havrushchenko@gmail.com</a></p>
                        </div>
                        <button type="submit" class="bg-black rounded-md py-3 px-7 mt-6 text-white">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}