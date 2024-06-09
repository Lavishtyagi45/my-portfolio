import React from 'react';

export default function Skills() {
    return (
        <div id='Skills' className='h-auto pt-4'>
            <h3 className='text-2xl my-5 p-6 rounded font-semibold text-blue-600 bg-white'>
                Skills:
            </h3>
            <div className='md:flex md:p-12 p-6'>
                <ul className='text-white w-full md:w-3/4 text-sm sm:text-base lg:text-lg xl:text-xl'>
                    <li className='my-4'>
                        <strong>Frontend Development:</strong>
                        <p>HTML, CSS, JavaScript, React.js</p>
                        <p>Bootstrap 5, Tailwind CSS</p>
                    </li>
                    <li className='my-4'>
                        <strong>Programming Languages:</strong>
                        <p>Java (Object-Oriented Programming), C Programming</p>
                    </li>
                    <li className='my-4'>
                        <strong>Problem Solving:</strong>
                        <p>Algorithms, Data Structures</p>
                    </li>
                    <li className='my-4'>
                        <strong>Machine Learning:</strong>
                        <p>Leveraging ML techniques for disease prediction</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
