import { Link } from 'react-router-dom';
import './TitleCards.scss'
import { FC, WheelEvent, useEffect, useRef, useState } from 'react';
import { TitleCardType } from '../../model/TitleCardType';
import searchIcon from '../../assets/search_icon.svg'

interface TitleCardsProps {
  title?: string;
  category?: string;
}

const TitleCards: FC<TitleCardsProps> = ({ title, category }) => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [apiData, setApiData] = useState<TitleCardType[]>([]);
  const [search, setSearch] = useState('');

  function handleWheel(e: WheelEvent<HTMLDivElement>) {
    e.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += e.deltaY;
    }
  }

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmExMDZjMWI4NjZiZDkyZTcxNWEzMmM0MTJlODRmMCIsIm5iZiI6MTcxOTc1NjY2NC43NTcxOSwic3ViIjoiNjY4MTY1YjY5MmY2MWQ5MWIwMTYzOTc3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.baigzbuMBhO9UaXX-pnV9O-3q6F0Mnvgnu-CtTKHgtw'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));

    const currentRef = cardsRef.current
    if (currentRef) {
      currentRef.addEventListener('wheel', handleWheel as unknown as EventListener);

      return () => {
        currentRef.removeEventListener('wheel', handleWheel as unknown as EventListener);
      };
    }
  }, []);

  const filtredData = apiData.filter(data => data.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className='titleCards'>
      <div className="cardMain">
        <h2>{title ? title : 'Popular on Netflix'}</h2>
        <div className="cardMainSearch">
          <img src={searchIcon} alt="Search" />

        <div className="dropdown">
          <input className='dropdownSearch' type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder='Search' />
        </div>
        </div>
        
      </div>


      <div className="cardList" ref={cardsRef}>
        {filtredData.map((card, index) =>
          <Link to={`/player/${card.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt={card.title} />
            <p>{card.title}</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TitleCards;