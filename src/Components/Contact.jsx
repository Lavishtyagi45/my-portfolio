import React from 'react';
 
import { AiFillFacebook,AiFillTwitterCircle ,AiFillInstagram,AiFillLinkedin} from 'react-icons/ai';

export default function Footer(){
    return(
        <>
        <div className=' bg-blue-950 text-white' id='Contact'>
        <div className='p-5'>
            <h2 className='text-xl font-medium my-5'>About</h2>
            <p className='text-lg'>My name is  Lavish Tyagi and currently studying Bachelor of Technology at DevBhoomi Uttarakhand University and I am passionate about web development.I have developed strong problem solving skills. </p>
        </div>
        <nav className='m-6'>
             <h4 className='text-xl font-medium my-5'>Navigations</h4>
             <ul>
             <li className='cursor-pointer m-2'>
                <a href='#About'>About Me</a></li>
             <li className='cursor-pointer m-2'>
                <a href='#Education'>Education</a></li>
             <li className='cursor-pointer m-2'>
                <a href='#Skills'>Skills</a></li>
             <li className='cursor-pointer m-2'>
                <a href='#Projects'>Projects</a></li>
             </ul>
        </nav>
        <div className='m-6 pt-6 grid justify-items-center'>
            <div className='flex my-6'>
                <facebook className='cursor-pointer mx-2'><AiFillFacebook size={30}/></facebook>
                <twitter className='cursor-pointer mx-2'><AiFillTwitterCircle size={30}/></twitter>
                <instagram className='cursor-pointer mx-2'><AiFillInstagram size={30}/></instagram>            
                <linkedIn className='cursor-pointer mx-2'><AiFillLinkedin size={30}/></linkedIn>
            </div>
                <div>
            <input type='search' className='outline-white text-black p-1 rounded'/><button type='button' className='bg-blue-700 text-white rounded p-1 mx-2 outline-white outline-1 outline-double'>Search</button>
        </div>            
        </div>
        <hr/>
        </div>
        <p className='grid justify-items-center bg-blue-950 text-white p-5'>Copyright &copy; 2023 Include | All Rights Reserved</p>
      </>
    )
}