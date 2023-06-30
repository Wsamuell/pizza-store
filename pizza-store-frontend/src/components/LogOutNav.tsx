import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';

type Props = {
  isTopOfPage: boolean;
};

const LogOutNav = ({ isTopOfPage }: Props) => {
  const flexBetween = 'flex items-center justify-between';
  const flexCenter = 'flex items-center justify-center';
  const transitionFade = 'transition delay-150 duration-300 ease-in-out';
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage
    ? 'transition delay-150 duration-300 ease-in-out'
    : `bg-primary-100 drop-shadow ${transitionFade}`;
  const logUserOut = () => {
    localStorage.clear();
  };

  return (
    <nav>
      <div className={`${navbarBackground}${flexBetween}  flex w-full  p-4`}>
        <img alt="logo" src={Logo} />
        {isAboveMediumScreens ? (
          <div className={`${flexCenter} gap-10 `}>
            <RouteLink
              to="/"
              onClick={logUserOut}
              className="hover:text-blacks items-center rounded-md bg-secondary-400 px-10 py-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-primary-500 hover:delay-150"
            >
              Log Out
            </RouteLink>
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
        <div className=" fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12 ">
            <button
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              className="rounded-full bg-secondary-400 p-2"
            >
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className=" text-md ml-[33%] flex flex-col gap-10">
            <RouteLink to="/" onClick={logUserOut}>
              Log Out
            </RouteLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LogOutNav;
