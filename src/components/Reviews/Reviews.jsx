import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../../shared/services/movies';

const Reviews = () => {
  const [reviews, setReviews] = useState({
    review: [],
    loading: false,
    error: null,
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchMoviesReviews = async () => {
      try {
        setReviews(prevState => ({
          ...prevState,
          loading: true,
        }));
        const { results } = await getMovieReviews(id);
        setReviews({
          review: [...results],
          loading: false,
          error: null,
        });
      } catch (err) {
        setReviews({
          review: [],
          loading: false,
          error: err,
        });
      }
    };
    fetchMoviesReviews();
  }, [id]);

  const { review, loading, error } = reviews;

  const items = review.map(item => (
    <li key={review.id}>
      <p>
        <span>Author: </span>
        {item.author}
      </p>
      <p>
        <span>Comment: </span>
        {item.content}
      </p>
    </li>
  ));

  const listReviews = reviews.length > 0 && !loading && !error;

  return (
    <>
      {loading && <p>Search reviews</p>}
      {error && !loading && <p>No reviews</p>}
      {!listReviews ? <ul>{items}</ul> : <p>No reviews</p>}
    </>
  );
};

export default Reviews;
