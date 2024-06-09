import React from 'react';

export default function About() {
    return (
        <>
         <div className='text-white flex-col items-center h-auto pt-4' id='About'>
            <h4 className='text-2xl font-medium bg-white text-blue-600  rounded my-5 p-6'>About :</h4>
              <ul className='list-disc text-sm sm:text-lg lg:text-xl xl:text-2xl p-6 md:p-12 '>
                <li className='py-6'>I am currently studying Bachelor of Technology at DevBhoomi Uttarakhand University and I am
                    passionate about web development.</li>
                <li className='py-6'>I believe that this would be beneficial because it
                    would allow me to gain valuable work experience in the field.</li>
                <li className='py-6'>I have developed strong problem solving skills. These skills would allow me to be successful in
                    this role.</li>
                <li className='py-6'>I am a hard worker who is always willing to go above and beyond to get the job done.</li>
                <li className='py-6'> I am also a team player who enjoys working with others to achieve common goals. I am confident that I could
                    be a valuable asset to a team and contribute to the success of the team.</li>
             </ul>
        </div>
      </>
    )
}
