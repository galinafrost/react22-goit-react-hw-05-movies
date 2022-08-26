import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getTrending } from '../../shared/services/movies';

const TrendMovies = () => {
  const [data, setData] = useState({
    movies: [],
    loading: false,
    error: null,
  });

  const location = useLocation();

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        setData(prevData => ({
          ...prevData,
          loading: true,
        }));
        const { results } = await getTrending();
        setData({
          movies: [...results],
          loading: false,
          error: null,
        });
      } catch (err) {
        setData({
          movies: [],
          loading: false,
          error: err,
        });
      }
    };
    console.log();

    fetchTrends();
  }, [setData]);

  const topMowies = data.movies.map(movie => (
    <li key={movie.id}>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : 'http://hypeava.ru/uploads/posts/2020-02/1580997108_3.jpg'
          }
          alt={movie.original_title}
        />
        <p>{movie.name ?? movie.title}</p>
      </Link>
    </li>
  ));
  const { loading, error, movies } = data;
  const topFilm = movies.length > 0 && !data.loading && !data.error;
  const errorMovies = error && !loading;
  return (
    <div>
      <h2>Top movies today</h2>
      {loading && <p>Making a list...</p>}
      {errorMovies && (
        <p>
          Today there are no popular films. Everyone only watches Stranger
          Things.
        </p>
      )}

      {topFilm && <ul>{topMowies}</ul>}
    </div>
  );
};

export default TrendMovies;
