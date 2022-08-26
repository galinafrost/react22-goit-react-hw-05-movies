import { NavLink } from 'react-router-dom';

import styles from './styles.module.css';

const getLinkClassName = ({ isActive }) => {
  return isActive ? styles.linkActive : styles.link;
};

const HeaderMenu = () => {
  return (
    <>
      <ul className={styles.menu}>
        <li>
          <NavLink to="/" className={getLinkClassName}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={getLinkClassName}>
            Movies
          </NavLink>
        </li>
      </ul>
    </>
  );
};
export default HeaderMenu;
