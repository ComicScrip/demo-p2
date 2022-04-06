import { NavLink } from 'react-router-dom';

const getActiveLinkStyle = ({ isActive }) => ({
  color: isActive ? 'orange' : 'white',
});

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink style={getActiveLinkStyle} to="/">
          Home
        </NavLink>
        <NavLink style={getActiveLinkStyle} to="/about">
          About
        </NavLink>
        <NavLink style={getActiveLinkStyle} to="/contact">
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
