import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from '../../shared/services/movies';

const Cast = () => {
  const [state, setState] = useState({
    actor: [],
    loading: false,
    error: null,
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchMoviesCast = async () => {
      console.log('fetchMoviesCast');
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
        }));
        const { cast } = await getMovieCast(id);
        setState({
          actor: [...cast],
          loading: false,
          error: null,
        });
      } catch (err) {
        setState({
          actor: [],
          loading: false,
          error: err,
        });
      }
    };
    fetchMoviesCast();
  }, [id]);

  const { actor, loading, error } = state;

  const items = actor.map(item => (
    <li key={item.id}>
      <img
        src={
          item.profile_path
            ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
            : 'https://i.pinimg.com/564x/fc/3e/10/fc3e10132be5819982df46baa80224a8.jpg'
        }
        alt=""
      />
      <p>{item.name}</p>
      <p>{item.character}</p>
    </li>
  ));

  const listActor = actor.length > 0 && !loading && !error;

  return (
    <>
      {loading && <p>Search actors</p>}
      {error && !loading && <p>No actors</p>}
      {listActor ? <ul>{items}</ul> : <p>No famous actors</p>}
    </>
  );
};

export default Cast;
