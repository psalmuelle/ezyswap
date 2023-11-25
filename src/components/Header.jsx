import React from "react";
import Image from "./Image";
import Button from './Button'
import GoogleButton from "react-google-button";

import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className='bg-black px-4 py-2 flex justify-between items-center'>
      <a href='/' className='flex items-center w-fit'>
        <Image src={logo} width={48} height={48} className='' />
        <p className='font-medium'>
          EZY<span className='text-primary'>SWAP</span>
        </p>
      </a>

      <nav>
        <a>Market Pairs</a>
        <a>Team</a>
        <a>About</a>
      </nav>

      <div>
     <GoogleButton />
      </div>
    </header>
  );
};

export default Header;
