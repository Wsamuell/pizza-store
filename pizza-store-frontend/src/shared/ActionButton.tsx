import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from './types';

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="hover:text-blacks rounded-md bg-secondary-400 px-10 py-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-primary-500 hover:delay-150
      "
      bg-secondary-400
      onClick={() => setSelectedPage(SelectedPage.LogIn)}
      href={`#${SelectedPage.LogIn}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
