import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const logo = {
    name: 'go2steam',
    imageUrl: 'go2s',
  }

  return (
    <nav>
      <ul>
          <img src={logo.imageUrl} alt={"Photo of " + logo.name} />
        <li className='home-li'>
          <Link to='/' className='home-li'>Go2Steam</Link>
        </li>

        <li>
          <Link to='/achievment'>Achievement</Link>
        </li>

        <li>
          <Link to='/documentation'>Documentation</Link>
        </li>

         <li>
          <Link to='/contact'>Contact</Link>
        </li>

        {/* --- Dropdown Menu --- */}
        <li
          className="dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <li className='dropdown-toggle'>
            Profile ▾
          </li>

          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/about"  className='link-menu'>About</Link></li>
              <li><Link to="/stats" className='link-menu'>Stats</Link></li>
              <li><Link to="/member1" className='link-menu'>Member's | gen-1</Link></li>
              <li><Link to="/member2" className='link-menu'>Member's | gen-2</Link></li>
            </ul>
          )}
          
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
