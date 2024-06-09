import React from 'react';
import { AiFillLinkedin , AiFillGithub } from 'react-icons/ai';

export default function Footer() {
    return (
        <>
            <div className='bg-blue-950 text-white' id='Contact'>
                <div className='p-5'>
                    <h2 className='text-xl font-medium my-5'>About</h2>
                    <p className='text-lg'>My name is Lavish Tyagi and currently studying Bachelor of Technology at DevBhoomi Uttarakhand University and I am passionate about web development. I have developed strong problem-solving skills.</p>
                </div>
                <nav className='m-6'>
                    <h4 className='text-xl font-medium my-5'>Navigations</h4>
                    <ul>
                        <li className='cursor-pointer m-2'>
                            <a href='#About'>About Me</a>
                        </li>
                        <li className='cursor-pointer m-2'>
                            <a href='#Education'>Education</a>
                        </li>
                        <li className='cursor-pointer m-2'>
                            <a href='#Skills'>Skills</a>
                        </li>
                        <li className='cursor-pointer m-2'>
                            <a href='#Projects'>Projects</a>
                        </li>
                    </ul>
                </nav>
                <div className='m-6 pt-6 grid justify-items-center'>
                    <div className='flex my-6'>
                        <a className='cursor-pointer mx-2 no-underline'href='https://www.linkedin.com/in/lavishtyagi45'><AiFillLinkedin size={30} /></a>
                        <a className='cursor-pointer mx-2 no-underline' href='https://www.github.com/Lavishtyagi45'> <AiFillGithub size={30} /></a>
                    </div>
                </div>
                <hr />
            </div>
            <p className='grid justify-items-center bg-blue-950 text-white p-5'>Copyright &copy; 2023 Include | All Rights Reserved</p>
        </>
    )
}
