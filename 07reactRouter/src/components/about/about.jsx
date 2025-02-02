import React from 'react';

export default function About() {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-purple-100 py-16">
      <div className="container mx-auto px-6 md:px-12 xl:px-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          
          <div className="md:w-7/12">
            <h2 className="text-3xl font-extrabold text-gray-900 md:text-5xl leading-tight">
              Hi! Rahul Here 🚀
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Hi! I'm an enthusiastic programmer with a deep interest in <strong>Data Structures & Algorithms</strong> and <strong>Full-Stack Development</strong>. 
              I cracked <strong>JEE Advanced</strong> 
            </p>

            <ul className="mt-4 text-lg text-gray-700 list-disc pl-6 space-y-2">
              <li><strong>JEE Mains:</strong> 99.29 percentile</li>
              <li><strong>JEE Advanced:</strong> AIR 5977</li>
              <li><strong>Sole IIT entrant</strong> from my school</li>
              <li><strong>3-star coder</strong> on CodeChef</li>
              <li><strong>350+ problems solved</strong> on LeetCode</li>
              <li><strong>Winner</strong> of Code Crusade (Intra-college coding competition)</li>
              <li>Enjoys <strong>Data & Development</strong> challenges</li>
            </ul>

            
            <div className="mt-6 bg-white border-l-4 border-blue-500 shadow-md p-4 rounded-md">
              <p className="text-lg font-semibold text-gray-900">
                Chai-Code-Repeat
              </p>
            </div>
          </div>

        
          <div className="md:w-5/12">
            <img
              src="https://media.istockphoto.com/id/629285904/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=1024x1024&w=is&k=20&c=p2_qAiYrULo7lI79eB37eQ77YsqRYap3FmsQvwyIfbM="
              alt="Coding Background"
              className="w-full rounded-3xl shadow-xl transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
