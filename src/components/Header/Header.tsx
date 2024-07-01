import './Header.scss'
import logo from '../../assets/logo.png'
import profile from '../../assets/profile_img.png'
import searchIcon from '../../assets/search_icon.svg'
import caret from '../../assets/caret_icon.svg'
import bell from '../../assets/bell_icon.svg'
import { observer } from 'mobx-react-lite'
import authStore from '../../store/authStore'
import { useNavigate } from 'react-router-dom'

const Header = observer(() => {
  const {logout} = authStore;
  const navigate = useNavigate();

  function logoutB() {
    logout();
    navigate('/start_page')
  }

  return (
    <header className='header'>
      <div className="headerLeft">
        <img src={logo} alt="Netflix" />

        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>TV Shows</a>
          </li>
          <li>
            <a>Movies</a>
          </li>
          <li>
            <a>New & Popular</a>
          </li>
          <li>
            <a>My List</a>
          </li >
          <li>
            <a>Browse by Languages</a>
          </li >
        </ul >
      </div >

      <div className="headerRight">
        <img src={searchIcon} alt="Search" />
        <p>Kids</p>
        <img src={bell} alt="Bell" />

        <div className="headerProfile">
          <img src={profile} alt="Profile" className='profile' />
          <img src={caret} alt="Caret" className='caret' />
          
          <div className="dropdown">
            <p onClick={logoutB}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>

    </header >
  );
});

export default Header;