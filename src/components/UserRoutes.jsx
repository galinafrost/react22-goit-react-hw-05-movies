import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const SingleMoviePage = lazy(() => import('../pages/SingleMoviePage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id/*" element={<SingleMoviePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
