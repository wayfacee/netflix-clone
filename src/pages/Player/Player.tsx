import './Player.scss'
import backArrowIcon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    typeof: '',
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmExMDZjMWI4NjZiZDkyZTcxNWEzMmM0MTJlODRmMCIsIm5iZiI6MTcxOTc1NjY2NC43NTcxOSwic3ViIjoiNjY4MTY1YjY5MmY2MWQ5MWIwMTYzOTc3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.baigzbuMBhO9UaXX-pnV9O-3q6F0Mnvgnu-CtTKHgtw'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='player'>
      <img onClick={() => navigate('/home')} src={backArrowIcon} alt="Back Arrow Icon" />
      <iframe width={'80%'} height={'80%'}
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title='trailer' frameBorder={0} allowFullScreen />

      <div className="playerInfo">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
      </div>
    </div>
  );
};

export default Player;