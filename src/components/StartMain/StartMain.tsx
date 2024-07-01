import InButton from '../UI/InButton/InButton';
import './StartMain.scss'

const Main = () => {
  return (
    <div className='startMain'>
      <h1>
        Unlimited movies, TV shows, and more
      </h1>

      <p className='startMainText'>Watch anywhere. Cancel anytime.</p>
      <InButton />
    </div>

  );
};

export default Main;