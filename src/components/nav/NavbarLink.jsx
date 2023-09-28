import { Link } from 'react-router-dom';

const NavbarLink = ({className, children, to, icon}) => {
  return (
      <Link to={to} className={className}>
        <span className='md:hidden'>{icon}</span>
        <span className='hidden md:block'>{children}</span>
      </Link>
  );
};

export default NavbarLink;