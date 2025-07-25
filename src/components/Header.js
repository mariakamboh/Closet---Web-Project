import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isBridalOpen, setIsBridalOpen] = useState(false);
  const [isGroomOpen, setIsGroomOpen] = useState(false);

  const toggleBridalDropdown = () => setIsBridalOpen(!isBridalOpen);
  const toggleGroomDropdown = () => setIsGroomOpen(!isGroomOpen);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">CLOSET</Link>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li 
            className="nav-item" 
            onMouseEnter={toggleBridalDropdown} 
            onMouseLeave={toggleBridalDropdown}
          >
            <Link>Bridal</Link>
            {isBridalOpen && (
              <ul className="dropdown">
                <li><Link to="/bridal/mahendi">Mahendi</Link></li>
                <li><Link to="/bridal/barat">Barat</Link></li>
                <li><Link to="/bridal/walima">Walima</Link></li>
                <li><Link to="/bridal/nikkah">Nikkah</Link></li>
              </ul>
            )}
          </li>
          <li 
            className="nav-item" 
            onMouseEnter={toggleGroomDropdown} 
            onMouseLeave={toggleGroomDropdown}
          >
            <Link to="/groom">Groom</Link>
            {isGroomOpen && (
              <ul className="dropdown">
                <li><Link to="/groom/sherwani">Sherwani</Link></li>
                <li><Link to="/groom/three-piece">3-Piece</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
