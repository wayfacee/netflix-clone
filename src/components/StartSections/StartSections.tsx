import './StartSections.scss'
import tv from '../../assets/tv.jpg'
import download from '../../assets/download.png'
import device from '../../assets/device.png'
import kids from '../../assets/kids.png'
import InButton from '../UI/InButton/InButton'

const StartSection = () => {
  return (
    <>
      <section className='sectionOne'>
        <div className="sectionOneLeft">
          <h1>Enjoy on your TV</h1>
          <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>

        <img src={tv} alt="TV" />
      </section>

      <section className='sectionTwo'>
        <img src={download} alt="Download" />

        <div className="sectionTwoRight">
          <h1>Download your shows to watch offline</h1>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
      </section>

      <section className="sectionThree">
        <div className="sectionThreeLeft">
          <h1>Watch everywhere</h1>
          <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>

        <img src={device} alt="Device" />
      </section>

      <div className="four">
        <section className="sectionFour">
          <img src={kids} alt="Kids" />

          <div className="sectionFourRight">
            <h1>Create profiles for kids</h1>
            <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership..</p>
          </div>

        </section>
        <InButton />
      </div>
    </>
  );
};

export default StartSection;