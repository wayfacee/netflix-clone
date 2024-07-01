import './Navbar.scss'
import logo from '../../assets/logo.png'
import world from '../../assets/world.svg'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className='navbar'>
      <div className="navbar-logo">
        <img src={logo} alt="NETFLIX" />
      </div>

      <div className="navbar-items">
        <div className="navbar-select">
          <img src={world} alt="World" />
          <select name="" id="">
            <option value="English">English</option>
          </select>
        </div>

        <div className="navbar-btn">
          <button onClick={() => navigate('/login')}>Sign in</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;