import React from 'react';

export default function Projects(){
    return(
        <>
        <div id='Projects' className='min-h-screen text-white'>
        <h3 className='text-2xl my-5 p-6  rounded font-semibold text-blue-600 bg-white'>Projects :</h3>
        <div className='flex mx-auto overflow-x-auto '>
        <div className='sm:w-screen m-12 p-6 outline outline-white outline-2 md:w-1/4 '>
            <h2 className='text-lg lg:text-xl xl:text-2xl font-semibold pb-6'>Project 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi suscipit blanditiis, fuga eum ratione exercitationem quo maiores deserunt fugiat in tempore sit quaerat temporibus iure.</p>
        </div>
        <div className='sm:w-screen m-12 p-6 outline outline-white outline-2 md:w-1/4 '>
            <h2 className='text-lg lg:text-xl xl:text-2xl font-semibold pb-6'>Project 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi suscipit blanditiis, fuga eum ratione exercitationem quo maiores deserunt fugiat in tempore sit quaerat temporibus iure.</p>
        </div>
        <div className='sm:w-screen m-12 p-6 outline outline-white outline-2 md:w-1/4'>
            <h2 className='text-lg lg:text-xl xl:text-2xl font-semibold pb-6'>Project 3</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi suscipit blanditiis, fuga eum ratione exercitationem quo maiores deserunt fugiat in tempore sit quaerat temporibus iure.</p>
        </div>
        <div className='sm:w-screen m-12 p-6 outline outline-white outline-2 md:w-1/4'>
            <h2 className='text-lg lg:text-xl xl:text-2xl font-semibold pb-6'>Project 4</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi suscipit blanditiis, fuga eum ratione exercitationem quo maiores deserunt fugiat in tempore sit quaerat temporibus iure.</p>
        </div>
        </div>
        </div>
        </>
    );
}