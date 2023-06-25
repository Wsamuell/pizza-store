import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';

type Props = {};

const NavBar = (props: Props) => {
  const flexBetween = 'flex items-center justify-between';
  return (
    <nav>
      <div className={`${flexBetween} top-0 z-30 flex w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}></div>
        <div className={`${flexBetween} w-full gap-16`}>
          <div className={`${flexBetween} gap-8 text-sm`}>
            <p>Home</p>
            <p>Our Specials</p>
          </div>
          <img alt="logo" src={Logo} className=" w-44" />
          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
              <p>Log In</p>
              <p>Contact Us!</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
