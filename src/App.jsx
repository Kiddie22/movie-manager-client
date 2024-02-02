import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import axios from './api/axios.config';
import Layout from './components/Layout';
import Home from './components/home/Home';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const res = await axios.get('movies');
      console.log(res.data);
      setMovies(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home movies={movies} />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
