import React, { useState } from 'react';
import api from '../../services/api';

import { Container } from './styles';

function Add() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  async function handleChange(event) {
    setQuery(event.target.value);

    const response = await api.get(
      `/search/movie?api_key=7521b41284f1ad24823061811cf4b6e8&language=pt-BR&query=${query}&page=1&include_adult=false`
    );

    setResults(response.data.results);
    console.log(results);
  }

  return (
    <Container>
      <input
        type="text"
        placeholder="Digite um filme"
        value={query}
        onChange={handleChange}
      />
    </Container>
  );
}

export default Add;
