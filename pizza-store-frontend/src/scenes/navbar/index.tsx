import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { SelectedPage } from '@/shared/types';
import Logo from '@/assets/Logo.png';
import Link from './Link';
import useMediaQuery from '@/hooks/useMediaQuery';
import { Fragment, useState } from 'react';
import ActionButton from '@/shared/ActionButton';

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = 'flex items-center justify-between';
  const flexCenter = 'flex items-center justify-center';
  const transitionFade = 'transition delay-150 duration-300 ease-in-out';
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage
    ? 'transition delay-150 duration-300 ease-in-out'
    : `bg-primary-100 drop-shadow ${transitionFade}`;

  return (
    <nav>
      <div
        className={`${navbarBackground}${flexBetween} fixed top-0 z-30 flex w-full  p-4`}
      >
        {isAboveMediumScreens ? (
          <div className={`${flexCenter} gap-10 font-light`}>
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <Fragment />
        )}
        <img alt="logo" src={Logo} />
        {isAboveMediumScreens ? (
          <div className={`${flexCenter} gap-10 `}>
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <ActionButton setSelectedPage={setSelectedPage}>
              Log In
            </ActionButton>
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
        <div className=" fixed right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12 ">
            <button
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              className="rounded-full bg-secondary-400 p-2"
            >
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className=" text-md ml-[33%] flex flex-col gap-10">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
