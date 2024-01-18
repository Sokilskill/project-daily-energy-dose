import { NavList, Link } from './UserNav.styled';

export const UserNav = ({ className, closeMenu }) => {
  return (
    <NavList className={className}>
      <li>
        <Link onClick={closeMenu} to="/diary">
          Diary
        </Link>
      </li>
      <li>
        <Link onClick={closeMenu} to="/products">
          Products
        </Link>
      </li>
      <li>
        <Link onClick={closeMenu} to="/exercises">
          Exercises
        </Link>
      </li>
    </NavList>
  );
};
