import { useEffect, useState } from 'react';
import {
  Route,
  Routes,
  useParams,
  useNavigate,
  NavLink,
  useLocation,
} from 'react-router-dom';

import { getMovieById } from '../../shared/services/movies';
import Cast from '../Cast';
import Reviews from '../Reviews';

const SingleMovie = () => {
  const [state, setState] = useState({
    infoMovie: null,
    loading: false,
    error: null,
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        setState(prevData => ({
          ...prevData,
          loading: true,
        }));
        const data = await getMovieById(id);
        setState({
          infoMovie: { ...data },
          loading: false,
          error: null,
        });
      } catch (err) {
        setState({
          infoMovie: null,
          loading: false,
          error: err,
        });
      }
    };

    fetchInfo();
  }, [id]);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from || '/';
  const goBack = () => navigate(from);

  const { loading, error, infoMovie } = state;
  const infoMovieSearch = infoMovie && !loading && !error;

  return (
    <div>
      {loading && <p>Making a list...</p>}
      {error && !loading && <p>Everyone only watches Stranger Things.</p>}
      {infoMovieSearch && (
        <>
          <img
            src={
              infoMovie.poster_path
                ? `https://image.tmdb.org/t/p/w500${infoMovie.poster_path}`
                : 'http://hypeava.ru/uploads/posts/2020-02/1580997108_3.jpg'
            }
            alt=""
          />
          <h2>{infoMovie.title}</h2>
          <p>Vote: {infoMovie.vote_average}</p>
          <p>Popularity: {infoMovie.popularity}</p>
          <h2>Overview</h2>
          <p>{infoMovie.overview}</p>
        </>
      )}

      <NavLink to="cast" state={{ from: from }}>
        Cast
      </NavLink>
      <NavLink to="reviews" state={{ from: from }}>
        Reviews
      </NavLink>

      <div>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </div>

      <button type="button" onClick={goBack}>
        Back
      </button>
    </div>
  );
};

export default SingleMovie;
