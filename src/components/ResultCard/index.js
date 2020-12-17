/* eslint-disable react/prop-types */
import React from 'react';

import { Container } from './styles';

function ResultCard({ movie }) {
  return (
    <Container>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
      ) : (
        <h2>Sem imagem</h2>
      )}

      <div>
        <h1>{movie.title}</h1>
        {movie.vote_average !== 0 ? (
          <p>{movie.vote_average}</p>
        ) : (
          <span>Sem nota</span>
        )}
        <h3>{movie.release_date.substring(0, 4)}</h3>

        <button type="button">Adicionar a lista</button>
      </div>
    </Container>
  );
}

export default ResultCard;
