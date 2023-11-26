import React, { useState } from "react";
import Image from "./Image";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

import userIcon from "../assets/user-icon.png";
import logo from "../assets/logo.svg";
import { UserAuth } from "../context/AuthContext";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMobileMenu = () => {
    setOpenMenu(!openMenu);
  };

  const { googleSignIn, logOut, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  // const user = false;

  return (
    <header className='bg-[#383838]/50  px-[2%] py-2 flex justify-between items-center relative text-sm text-white'>
      <Link to='/' className='flex items-center w-fit'>
        <Image src={logo} width={48} height={48} className='' />
        <p className='font-medium text-base'>
          EZY<span className='text-primary font-bold'>SWAP</span>
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
        {user?.displayName ? (
          <div className='flex gap-4'>
            <div className='flex justify-center items-center gap-2 px-3 py-1'>
              <Image
                src={user?.photoURL || userIcon}
                alt={user?.displayName}
                className='w-6 h-6 rounded-full'
              />
              <p>Hey {user?.displayName}! 👋</p>
            </div>
            <button
              className='px-3 py-2 rounded-md bg-primary hover:bg-primary/80 border'
              onClick={handleLogOut}>
              Log out
            </button>
          </div>
        ) : (
          <GoogleButton
            label='Sign In With Google'
            onClick={handleGoogleSignIn}
          />
        )}
      </div>

      <div className='hidden max-sm:block'>
        <Hamburger label='Menu' size={32} onToggle={handleMobileMenu} />
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className='absolute top-full left-0 bg-black border-t w-full flex flex-col gap-5 items-center py-8 z-50'>
          {user?.displayName && (
            <div className='flex justify-center items-center gap-2 px-3'>
              <Image
                src={user?.photoURL || userIcon}
                alt={user?.displayName}
                className='w-6 h-6 rounded-full'
              />
              <p>Hey {user?.displayName}! 👋</p>
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
          {!user?.displayName && (
            <GoogleButton
              label='Sign In With Google'
              onClick={handleGoogleSignIn}
            />
          )}
          {user?.displayName && (
            <button
              className='px-3 py-2 rounded-md bg-primary border'
              onClick={handleLogOut}>
              Log out
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
