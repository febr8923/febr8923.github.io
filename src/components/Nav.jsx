import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <div className="container">
        <Link to="/" className="nav-name">Ferdinand Brunne</Link>
        <ul className="nav-links">
          <li>
            <NavLink to="/cn" className={({ isActive }) => isActive ? 'active' : ''}>
              Computer Networks
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
