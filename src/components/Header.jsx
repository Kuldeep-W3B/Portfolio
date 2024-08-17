import React from 'react';
import { CoolMode } from '../MagicCom/Coolbttn.tsx';



const Header = () => {
  return (
    <>
      <div className="text-center py-10 w-max h-max text-blue-600">
        <h1 className="text-9xl float-left mx-10 font-bold mb-4">Hello!</h1>
        <h2 className="text-7xl mb-2">I'm Kuldeep</h2>
        <CoolMode>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Website & App Developer
          </button>
        </CoolMode>
      </div>
    </>
  )
}

export default Header;
