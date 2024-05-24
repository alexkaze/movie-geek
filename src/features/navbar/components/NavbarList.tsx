import { PATH_SEARCH, PATH_TOP250, PATH_POPULAR } from '@config/env-config';

import NavLink from './NavbarLink';

import styles from './Navbar.module.scss';

type Props = {
  isDisplayed?: boolean;
  animationEndHandler?: () => void;
  modalHandler?: (action: boolean) => void;
};

const NavbarList = ({
  isDisplayed,
  animationEndHandler,
  modalHandler
}: Props) => {
  const listHandler = (e: React.MouseEvent<Element, MouseEvent>) => {
    const targetEl = (e.target as Element).closest('a');
    if (targetEl && modalHandler) modalHandler(false);
  };

  return (
    <ul
      className={isDisplayed ? styles.list : `${styles.list} ${styles.close}`}
      onClick={isDisplayed ? listHandler : undefined}
      onAnimationEnd={animationEndHandler}
    >
      <li>
        <NavLink to={PATH_SEARCH!}>Поиск</NavLink>
      </li>

      <li>
        <NavLink to={PATH_TOP250!}>ТОП 250</NavLink>
      </li>

      <li>
        <NavLink to={PATH_POPULAR!}>Популярное</NavLink>
      </li>
    </ul>
  );
};

export default NavbarList;
