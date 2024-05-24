import { NavLink as RouterNavLink } from 'react-router-dom';

import styles from './NavbarLink.module.scss';

type Props = {
  to: string;
  children: React.ReactNode;
};

const NavLink = ({ to, children }: Props) => {
  const navLinkStyle = (isActive: boolean) =>
    isActive ? `${styles.navlink} ${styles.active}` : `${styles.navlink}`;

  return (
    <RouterNavLink to={to} className={({ isActive }) => navLinkStyle(isActive)}>
      {children}
    </RouterNavLink>
  );
};

export default NavLink;
