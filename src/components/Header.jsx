import React from 'react';
import BackImage from "../Images/back-image.png";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-10 px-10">
      <div className="flex flex-col justify-center text-center md:text-left flex-1">
           {/* Image only visible on small screens, positioned behind text */}
           <img
          src={BackImage}
          alt="Kuldeep"
          className="absolute inset-0 w-full h-full object-cover opacity-15 md:hidden"
        />
        <h1 className="text-blue-700 text-6xl md:text-9xl font-bold mb-4">Hello!</h1>
        <h2 className="text-blue-700 text-5xl font-bold md:text-7xl mb-2">I'm Kuldeep</h2>
        <p className="text-3xl font-bold py-2 px-4 rounded mt-4 animate-fade-in-out">
          Website & App Developer
        </p>
      </div>
      <div className="mt-10 md:mt-0 md:ml-10 flex justify-center items-center flex-1 hidden sm:block">
        <img
          src={BackImage}
          alt="Kuldeep"
          className="w-full max-w-2xl md:max-w-3xl"
        />
      </div>
    </div>
  );
}

export default Header;
