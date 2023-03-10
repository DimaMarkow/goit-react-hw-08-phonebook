import { NavLink } from 'react-router-dom';

import css from './navbar.module.css';
import items from './items';
import NavbarAuth from './NavbarAuth/NavbarAuth';

const Navbar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={css.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <div className={css.navbar}>
      <ul className={css.menu}>{elements}</ul>

      {<NavbarAuth />}
      {/* {isLogin && <NavbarUser />} */}
    </div>
  );
};

export default Navbar;
