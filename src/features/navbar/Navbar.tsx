import useMatchMedia from '@hooks/useMatchMedia';

import NavbarMedia from './components/NavbarMedia';
import NavbarLinks from './components/NavbarList';

const Navbar = () => {
  const mediaMatches = useMatchMedia();

  return <nav>{mediaMatches ? <NavbarMedia /> : <NavbarLinks />}</nav>;
};

export default Navbar;
