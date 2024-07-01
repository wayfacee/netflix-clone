import './InButton.scss'
import next from '../../../assets/next.svg'
import { useNavigate } from 'react-router-dom';

const InButton = () => {
  const navigate = useNavigate();
  return (
    <div className="input-button">
      <p>Ready to watch? Enter your email to create or restart your membership.</p>

      <div className="in-btn">
        <input type="text" placeholder='Correo electrónico' />
        <button onClick={() => navigate('/login')}>Empezar <img src={next} alt="next" /></button>
      </div>
    </div>
  );
};

export default InButton;