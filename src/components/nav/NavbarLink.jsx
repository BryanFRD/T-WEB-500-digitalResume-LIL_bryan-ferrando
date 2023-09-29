const NavbarLink = ({className, children, to, icon}) => {
  return (
      <a href={to} className={className}>
        <span className='md:hidden'>{icon}</span>
        <span className='hidden md:block col-span-2'>{children}</span>
      </a>
  );
};

export default NavbarLink;