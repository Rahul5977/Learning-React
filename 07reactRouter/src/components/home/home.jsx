import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            {/* Hero Section */}
            <aside className="relative text-white rounded-lg sm:mx-16 mx-2 sm:py-16 bg-gradient-to-br from-gray-300 via-gray-500 to-gray-600 shadow-lg">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl space-y-6 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-extrabold sm:text-5xl">
                            Download My CV
                            <span className="hidden sm:block text-orange-400 text-4xl">Rahul Raj</span>
                        </h2>

                        {/* Download Button */}
                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-600 rounded-lg shadow-lg hover:bg-orange-700 transition duration-300"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Click Here
                        </Link>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="absolute inset-0 w-full flex justify-center items-center sm:pt-10 pt-20">
                    <img
                        className="w-48 h-48 sm:w-60 sm:h-60 rounded-full border-4 border-white shadow-lg object-cover"
                        src="./Me.jpeg"
                        alt="Profile"
                    />
                </div>
            </aside>

            {/* Remote Work Image */}
            <div className="grid place-items-center sm:mt-40 mt-56">
               
            </div>

            {/* Name Section */}
            <h1 className="text-center text-3xl sm:text-5xl py-10 font-bold text-gray-800">Rahul Raj</h1>
        </div>
    );
}
