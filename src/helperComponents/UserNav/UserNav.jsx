import { NavList, Link } from './UserNav.styled';

export const UserNav = () => {
  return (
    <NavList>
      <li>
        <Link to="/diary">Diary</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/exercises">Exercises</Link>
      </li>
    </NavList>
  );
};
