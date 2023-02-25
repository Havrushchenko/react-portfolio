import { useState } from 'react';
import { validateEmail } from '../utils/helpers'

export function Contact() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setUserMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !userName) {
            setErrorMessage('Email or username is invalid');
            return;
        } else if (!userMessage) {
            setErrorMessage('Message is required');
            return;
        }
        alert(`Your message has been sent, ${userName}`);
        setUserName('');
        setEmail('');
        setUserMessage('');
    };
    return (
        <section className="flex items-center justify-center h-screen" style={{ width: '500px', margin: 'auto' }}>
            <div className="flex items-center">
                <div className="contact flex bg-white p-10">
                    <div className="mb-auto mt-auto max-w-lg">
                        <h2 className="flex justify-center text-3xl uppercase mb-5">Contact</h2>
                        <div className="mb-6">
                            <label for="email" className="block font-semibold mb-5">Your email</label>
                            <input value={email} name="email" onChange={handleInputChange} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required></input>
                        </div>
                        <div className="mb-6">
                            <label for="email" className="block font-semibold mb-5">Your name</label>
                            <input value={userName} name="userName" onChange={handleInputChange} type="text" id="userName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Name" required></input>
                        </div>
                        <div>
                            <label for="about" className="block font-semibold mb-5">Your message</label>
                            <div className="mt-1">
                                <textarea value={userMessage} type="text" id="userMessage" name="userMessage" onChange={handleInputChange} rows="3" style={{ resize: 'none' }} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Your message"></textarea>
                            </div>
                            <p className="mb-6 mt-2 text-sm text-gray-500">Write a few sentences to me. Or simply send me an email at: <a href='mailto:havrushchenko@gmail.com' className='font-semibold'>havrushchenko@gmail.com</a></p>
                        </div>
                        {errorMessage && (
                            <div>
                                <p className="text-sm text-gray-500">{errorMessage}</p>
                            </div>
                        )}
                        <button type="button" onClick={handleFormSubmit} className="bg-gray-800 hover:bg-gray-700 rounded-md py-3 px-7 mt-6 text-white">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
}