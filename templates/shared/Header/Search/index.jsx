import React from "react";

function Search() {
  return (
    <form className="b-search" action="/buscador">
      <label htmlFor="search" className="e-search-text-input-label">
        Buscar:
      </label>
      <input type="search" className="e-search-text-input" name="q" id="search" />
      <button type="submit" className="e-search-button">
        <i className="icon-search" />
        <span>Enviar</span>
      </button>
    </form>
  );
}

export default Search;
