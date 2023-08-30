import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { handleSearch } from 'services/api';

const Movies = () => {
  //   useEffect(() => {
  //     const getSearchingMovie = async () => {
  //       try {
  //         const searchingMovie = await handleSearch(movieName);
  //         setSearchResults(searchingMovie);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //   }, [movieName]);

  return (
    <section>
      <form>
        <input type="text" />
        <button type="submit">SEARCH</button>
      </form>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};

export default Movies;
