import { Link } from 'react-router-dom';

const NavbarLink = ({children, to, icon}) => {
  return (
      <Link to={to}>
        <span className='md:hidden'>{icon}</span>
        <span className='hidden md:block'>{children}</span>
      </Link>
  );
};

export default NavbarLink;