import resume from "../assets/Resume Volodya Havrushchenko.pdf";

export function Resume() {
    return (
        <section className="flex items-center justify-center h-screen">
            <div className="resume flex justify-center bg-white p-10" style={{width: '500px', margin: 'auto', height: '626px'}}>
                <div className="max-w-lg">
                    <h2 className="flex justify-center text-3xl uppercase mb-5">Resume</h2>
                    <p className="flex justify-center font-semibold mb-5">Front-end</p>
                    <ul className='text-sm text-gray-500'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Git</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                    <p className="flex justify-center font-semibold mb-5" style={{marginTop: '15px'}}>Back-end</p>
                    <ul className='text-sm text-gray-500'>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                        <li>MERN Stack</li>
                    </ul>
                    <p className="text-sm text-gray-800 mr-4 uppercase mt-10">
                            <a href={resume} className="text-gray-500" download>Download my resume</a>
                        </p>
                </div>
            </div>
        </section>
    );
}