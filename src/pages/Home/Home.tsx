import Header from '../../components/Header/Header';
import './Home.scss'
import heroBanner from '../../assets/hero_banner.jpg'
import heroTitle from '../../assets/hero_title.png'
import playIcon from '../../assets/play_icon.png'
import infoIcon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Header />

      <div className="hero">
        <img src={heroBanner} alt="Banner" className='bannerImg' />

        <div className="heroContent">
          <img src={heroTitle} alt="Title" className='contentTitle' />
          <p>Determined to protect a young patient who escaped a mysterious cult, a psychiatrist takes the girl in, putting her own family — and life — in danger.</p>

          <div className="heroBtns">
            <button><img src={playIcon} alt="Play" />Play</button>
            <button className='darkBtn'><img src={infoIcon} alt="Info" />More Info</button>
          </div>

          <TitleCards />
        </div>
      </div>

      <div className="moreCards">
        <TitleCards title='Blockbuster Movies' category='top_rated' />
        <TitleCards title='Only on Netflix' category='popular' />
        <TitleCards title='Upcoming' category='upcoming' />
        <TitleCards title='Top Pics for you' />
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;