import './LoginForm.scss'
import logo from '../../assets/logo.png'
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import authStore from '../../store/authStore';
import { useNavigate } from 'react-router-dom';

const LoginForm = observer(() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [signState, setSignState] = useState("Sign In")
  const {login, signUp} = authStore;

  function signInB() {
    login(email, password);
    navigate('/home');
  }

  function signUpB() {
    signUp(email, password);
    navigate('/home');
  }

  return (
    <div className='login'>
      <img src={logo} alt="Netflix" />

      <div className="loginForm">
        <h1>{signState}</h1>

        <form>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' />
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' />
          <button onClick={signState === 'Sign In' ? signInB : signUpB}>{signState}</button>

          <div className="formHelp">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <a href='https://help.netflix.com'>Need help?</a>
          </div>
        </form>

        <div className="formSwitch">
          {signState === 'Sign In' ? (
            <p>New to Netflix? <span onClick={() => setSignState('Sign Up')}>Sign Up Now</span></p>
          ) : (
            <p>Already have account? <span onClick={() => setSignState('Sign In')}>Sign In Now</span></p>
          )}
        </div>
      </div>
    </div>
  );
});

export default LoginForm;