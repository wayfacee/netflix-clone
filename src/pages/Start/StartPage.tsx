import Main from '../../components/StartMain/StartMain';
import Navbar from '../../components/Navbar/Navbar';
import './StartPage.scss'
import banner from '../../assets/background_banner.jpg'
import StartSection from '../../components/StartSections/StartSections';
import Footer from '../../components/Footer/Footer';
import { observer } from 'mobx-react-lite';

const StartPage = observer(() => {
  return (
    <div className='start'>
      <div className="startTop">
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </div>

      <div className="startBack">
        <img src={banner} alt="Background" />
      </div>

      <section className='firstSection'>
        <StartSection />
      </section>

      <footer>
        <div className="container">
        <Footer />
        </div>
      </footer>
    </div>
  );
});

export default StartPage;