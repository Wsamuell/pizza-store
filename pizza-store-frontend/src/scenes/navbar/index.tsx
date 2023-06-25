import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { SelectedPage } from '@/shared/types';

import Logo from '@/assets/Logo.png';
import Link from './Link';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useState } from 'react';
import ActionButton from '@/shared/ActionButton';
// import ActionButton from '@/shared/ActionButton';

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = 'flex items-center justify-between';
  const flexBottom = 'flex items-end justify-between';
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow';

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 flex w-full items-center py-6`}
      >
        {/* <div className={`${flexBetween} w-full gap-16`}></div> */}
        {isAboveMediumScreens ? (
          // <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBottom}`}>
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Specials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          // </div>
          <div />
        )}
        <img alt="logo" src={Logo} className=" w-64" />

        {isAboveMediumScreens ? (
          <div className={`${flexBetween} w-full gap-16`}>
            <div className={`${flexBetween} gap-8`}>
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <ActionButton setSelectedPage={setSelectedPage}>
                Log In
              </ActionButton>
              {/* <Link
                  page="Log In"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                /> */}
            </div>
          </div>
        ) : (
          <button
            className="rounded-full bg-secondary-400 p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
        )}
      </div>

      {/* {mobile menu} */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Specials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/* <ActionButton setSelectedPage={setSelectedPage}>
              Log In
            </ActionButton> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
