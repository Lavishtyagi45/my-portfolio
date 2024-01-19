import React from 'react';

export default function Skill() {
        function randomcolor() {
         let hexcode = `#${Math.random(0, 1).toString(16).slice(2, 8).padEnd(6, 0)}`;
         document.getElementById("#HTML").style.color = hexcode;
         document.getElementById("#HTML").style.transition = "all 0.5s";
}
    return (
        <div id='Skills' className='h-screen pt-4'>
            <h3 className='text-2xl my-5 p-6  rounded font-semibold text-blue-600 bg-white'>Skills :</h3>
            <div className=" md:flex md:p-12 p-6">
                <ul className='text-white w-screen md:w-3/4 text-sm sm:text-normal lg:text-lg xl:text-xl'>
                    <li className='my-4'>HTML & CSS [ Experienced ]<div className="bg-white w-2/3 rounded"><div id="HTML" className='bg-slate-300 w-4/5 text-end px-2 text-black'>
                        80%
                    </div></div>
                    </li>
                    <li className='my-4'>BOOTSTRAP [ Experienced ]<div className="bg-white w-2/3 rounded"><div id="BOOTSTRAP" className='bg-slate-300 w-3/4 text-end px-2 text-black'>
                        75%
                    </div></div>
                    </li>
                    <li className='my-4'>JAVASCRIPT [ Skillful ]<div className="bg-white w-2/3 rounded"><div id="JAVASCRIPT" className='bg-slate-300 w-3/4 text-end px-2 text-black'>
                        75%
                    </div></div>
                    </li>
                    <li className='my-4'>REACT JS [ Skillful ]<div className="bg-white w-2/3 rounded"><div id="BOOTSTRAP" className='bg-slate-300 w-1/2 text-end px-2 text-black'>
                        50%
                    </div></div>
                    </li>
                    <li className='my-4'>JQUERY [ Skillful ]<div className="bg-white w-2/3 rounded"><div id="JQUERY" className='bg-slate-300 w-3/5 text-end px-2 text-black'>
                        60%
                    </div></div>
                    </li>
                    <li className='my-4'>CORE JAVA [ Experienced ]<div className="bg-white w-2/3 rounded"><div id="JAVA" className='bg-slate-300 w-4/5 text-end px-2 text-black'>
                        80%
                    </div></div>
                    </li>
                </ul>
                <ul className='bg-white rounded  grid justify-items-center self-center mx-auto md:mx-0 md:w-1/4 w-1/2 my-6 text-sm sm:text-normal lg:text-lg xl:text-xl'>
                    <li className='py-2'> 0% - 40% :BEGINNER </li>
                    <li className='py-2'> 40% - 70% :SKILLFUL </li>
                    <li className='py-2'> 70% - 85% :EXPERIENCED </li>
                    <li className='py-2'> 85%+ : EXPERT </li>
                </ul>
            </div>
        </div>
    );
}