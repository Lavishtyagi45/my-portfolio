import React from 'react';
import ReactTyped from 'react-typed-component';
import I1 from './Images/Photo-LavishTyagi.jpg';

export default function Main() {
    return (
        <div id="info" className="text-white text-sm sm:text-normal md:text-lg xl:text-xl my-12">
            <img src={I1} alt="..." className='mx-auto h-3/5 md:hover:translate-y-2 rounded-xl' />
            <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl xl:text-4xl my-2 ">Lavish Tyagi</h2>
            <p>
                <ReactTyped strings={["I am a Software Engineer","I am a Front-End Developer"]} typeSpeed={60} backSpeed={50} loop />
            </p>
        </div>
    );
}
