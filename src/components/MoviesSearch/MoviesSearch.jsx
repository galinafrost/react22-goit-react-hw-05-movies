import { useEffect, useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

import SearchForm from './SearchForm';
import { getMoviesBySearch } from '../../shared/services/movies';

const MoviesSearch = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const location = useLocation();
  console.log(searchQuery);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
        }));
        const { results } = await getMoviesBySearch(searchQuery);
        setState({
          items: [...results],
          loading: false,
          error: null,
        });
      } catch (err) {
        setState({
          items: [],
          loading: false,
          error: err,
        });
      }
    };
    if (searchQuery) {
      fetchMovies();
    }
  }, [searchQuery]);

  const changeSearch = useCallback(
    query => setSearchParams({ query, page: 1 }),
    [setSearchParams]
  );

  const { items, loading, error } = state;

  const searchMowies = items.map(item => (
    <div>
      <li key={item.id}>
        <Link to={`/movies/${item.id}`} state={{ from: location }}>
          <img
            src={
              item.poster_path
                ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                : 'http://hypeava.ru/uploads/posts/2020-02/1580997108_3.jpg'
            }
            alt={item.original_title}
          />
          <p>{item.name ?? item.title}</p>
        </Link>
      </li>
    </div>
  ));

  const needMowies = items.length > 0 && !loading && !error;
  const errorMovies = !error && !loading && searchQuery && !items.length > 0;
  return (
    <div>
      <SearchForm onSubmit={changeSearch} />
      {loading && <p>Making a list...</p>}
      {errorMovies && <p>There is no such movie - watch Stranger Things.</p>}
      {needMowies && <ul>{searchMowies}</ul>}
    </div>
  );
};

export default MoviesSearch;
