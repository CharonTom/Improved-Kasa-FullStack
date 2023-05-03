import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'

function Header() {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? 'underline' : 'none',
    }
  }

  return (
    <nav className="nav">
      <Link to="/">
        <img src={Logo} alt="Logo" className="nav__img" />
      </Link>
      <div className="nav__link">
        <NavLink style={navLinkStyles} to="/">
          Accueil
        </NavLink>
        <NavLink style={navLinkStyles} to="/about">
          A Propos
        </NavLink>
      </div>
    </nav>
  )
}

export default Header
