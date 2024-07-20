import React from "react";

export default function Projects() {
  return (
    <>
      <div id="Projects" className="h-auto text-white">
        <h3 className="text-2xl my-5 p-6 rounded font-semibold text-blue-600 bg-white">
          Projects :
        </h3>
        {/* Online-Shopping-Management-System */}
        <div className="mx-auto">
          <div className="w-0.8 m-12 p-6 outline outline-blue-800 outline-2 rounded text-blue-600 bg-white">
            <h2 className="text-blue-800 text-lg lg:text-xl xl:text-2xl font-semibold pb-6">
              Online-Shopping-Management-System
            </h2>
            <p>
              The Online Shopping Management System is a java based console
              application that simulates an online shopping platform. The System
              supports various roles like Guests, Customers, and Administrators
              , providing an interface to manage products, orders and users.
              <ul>
                <li>
                  1- admin can add, edit, delete products with details like name,
                  description, price, category, quantity, etc.
                </li>
                <li>
                  2- register, login, logout functionalities for users to manage
                  their accounts and orders.
                </li>
                <li>
                  3- customer can place orders, view order history, cancel orders,
                  add products to cart, update quantity, remove products.
                </li>
                <li>
                  4- search and filter products by name, cateogry, description,
                  price range, etc and also track order status (e.g. pending,
                  shipped, delievered, return request, etc).
                </li>
              </ul>
            </p>
            <div className="flex justify-between">
            <button className="border-2 border-blue-800 p-2 my-2 rounded hover:bg-blue-800 hover:text-white">
              <a href="https://github.com/Lavishtyagi45/Online-Shopping-Management">
                github-link
              </a>
            </button>
            <button className="border-2 border-blue-800 p-2 my-2 rounded hover:bg-blue-800 hover:text-white">
              <a href="https://www.youtube.com/playlist?list=PLCt-U0DF4nMxlZadDTxlECq4MAhLHKmKx">
                vedio-link
              </a>
            </button>
            </div>
          </div>
        </div>
        {/* DevelopedbyCoders */}
        <div className="mx-auto">
          <div className="w-0.8 m-12 p-6 outline outline-blue-800 outline-2 rounded text-blue-800 bg-white">
            <h2 className="text-blue-800 text-lg lg:text-xl xl:text-2xl font-semibold pb-6">
              DevelopedbyCoders
            </h2>
            <p>
            A responsive website offering web development courses, resources, and notes, using Bootstrap for styling.
            <ul>
                <li>
                1- adapts to various screen sizes using Bootstrap and easy access to home, notes, courses, about, and contact sections.
                </li>
                <li>
                2- dynamic display of promotional images by using slider and a move to top fixed button at the bottom-right.
                </li>
                <li>
                3- key features like experience, notes, courses, about, and quality knowledge.
                </li>
                <li>
                4- showcases top courses with detailed information and provides additional navigation and contact information in footer.
                </li>
              </ul>
            </p>
            <div className="flex justify-between">
            <button className="border-2 border-blue-800 p-2 my-2 rounded hover:bg-blue-800 hover:text-white">
              <a href="https://github.com/Lavishtyagi45/DevelopedbyCoders">
                github-link
              </a>
            </button>
            <button className="border-2 border-blue-800 p-2 my-2 rounded hover:bg-blue-800 hover:text-white">
              <a href="https://codeby-developers.vercel.app/">
                live-link
              </a>
            </button>
            </div>
          </div>
        </div>

        <div className="mx-auto">
          <div className="w-0.8 m-12 p-6 outline outline-blue-800 outline-2 rounded text-blue-600 bg-white">
            <h2 className="text-blue-800 text-lg lg:text-xl xl:text-2xl font-semibold pb-6">
              Disease Prediction Using Machine Learning
            </h2>
            <p>
              This project focuses on disease prediction using machine learning
              classifiers such as logistic regression, decision tree, random
              forest, and MLP (Multi-layer Perceptron). It evaluates the
              performance of these classifiers based on accuracy, confusion
              matrices, and classification reports.
            </p>
            <button className="border-2 border-blue-800 p-2 my-2 rounded hover:bg-blue-800 hover:text-white">
              <a href="https://github.com/Lavishtyagi45/disease-prediction-using-machine-learning">
                github-link
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
