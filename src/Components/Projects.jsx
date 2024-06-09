import React from 'react';

export default function Projects() {
    return (
        <>
            <div id='Projects' className='h-auto text-white'>
                <h3 className='text-2xl my-5 p-6 rounded font-semibold text-blue-600 bg-white'>Projects :</h3>
                <div className='mx-auto'>
                    <div className='w-0.8 m-12 p-6 outline outline-blue-800 outline-2 rounded text-blue-600 bg-white'>
                        <h2 className='text-blue-800 text-lg lg:text-xl xl:text-2xl font-semibold pb-6'>Disease Prediction Using Machine Learning</h2>
                        <p>This project focuses on disease prediction using machine learning classifiers such as logistic regression, decision tree, random forest, and MLP (Multi-layer Perceptron). It evaluates the performance of these classifiers based on accuracy, confusion matrices, and classification reports.</p>
                        <button className='border-2 border-blue-800 p-2 my-2 rounded' ><a href="https://github.com/Lavishtyagi45/disease-prediction-using-machine-learning">for more</a></button>
                    </div>
                </div>
            </div>
        </>
    );
}
