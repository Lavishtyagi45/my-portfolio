import React from 'react';
import ReactTyped from 'react-typed-component';
import I1 from './Images/Frame1.png';

export default function Main() {
    return (
        <div id="info" className="text-white text-sm sm:text-normal md:text-lg xl:text-xl my-12">
            <img src={I1} alt="..." className='mx-auto h-3/5 md:hover:translate-y-2' />
            <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl xl:text-4xl my-2 ">Lavish Tyagi</h2>
            <p>
                <ReactTyped strings={["I am a software engineer"]} typeSpeed={60} backSpeed={50} loop />
            </p>
        </div>
    );
}
