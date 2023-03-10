import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import css from './navbar.module.css';
import { isUserLogin } from 'redux/auth/auth-selectors';
import items from './items';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

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

      {!isLogin && <NavbarAuth />}
      {isLogin && <NavbarUser />}
    </div>
  );
};

export default Navbar;
