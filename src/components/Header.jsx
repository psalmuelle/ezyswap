import React, { useState } from "react";
import Image from "./Image";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

import userIcon from "../assets/user-icon.png";
import logo from "../assets/logo.svg";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMobileMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleSignInBtn = () => {
    return;
  };

  const user = true;

  
  return (
    <header className='bg-black px-[2%] py-2 flex justify-between items-center relative text-sm'>
      <Link to='/' className='flex items-center w-fit'>
        <Image src={logo} width={48} height={48} className='' />
        <p className='font-medium'>
          EZY<span className='text-primary'>SWAP</span>
        </p>
      </Link>

      <nav className='flex justify-between items-center max-w-xs w-full max-md:hidden'>
        <Link to={"#"} className='block hover:border-b'>
          Market Pairs
        </Link>
        <Link to={"#"} className='block hover:border-b'>
          Exchange Rates
        </Link>
        <Link to={"#"} className='block hover:border-b'>
          About
        </Link>
      </nav>

      <div className='max-sm:hidden'>
        {user ? (
          <div className='flex justify-center items-center gap-2 px-3 py-1'>
            <Image src={userIcon} alt={"Dave"} className='w-6 h-6' />
            <p>Hey Dave! 👋</p>
          </div>
        ) : (
          <GoogleButton label='Sign In With Google' onClick={handleSignInBtn} />
        )}
      </div>

      <div className='hidden max-sm:block'>
        <Hamburger label='Menu' size={32} onToggle={handleMobileMenu} />
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className='absolute top-full left-0 bg-black border-t w-full flex flex-col gap-5 items-center py-8'>
          {user && (
            <div className='flex justify-center items-center gap-2 px-3'>
              <Image src={userIcon} alt={"Dave"} className='w-6 h-6' />
              <p>Hey Dave! 👋</p>
            </div>
          )}
          <Link to={"#"} className='block hover:border-b'>
            Market Pairs
          </Link>
          <Link to={"#"} className='block hover:border-b'>
            Exchange Rates
          </Link>
          <Link to={"#"} className='block hover:border-b'>
            About
          </Link>
          {!user && (
            <GoogleButton
              label='Sign In With Google'
              onClick={handleSignInBtn}
            />
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
