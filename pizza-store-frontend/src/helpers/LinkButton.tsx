import { Link } from 'react-router-dom';

type Props = {
  children: string;
  link: string;
  className?: string;
};

const LinkButton = ({ children, link, className }: Props) => {
  return (
    <Link
      to={`/${link}`}
      className={`hover:text-blacks items-center rounded-md bg-secondary-400 px-10 py-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-primary-500 hover:delay-150
 ${className}`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
