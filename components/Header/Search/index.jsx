import React from "react";
import { Input } from "antd";

const { Search: SearchAntd } = Input;

function Search() {
  return <SearchAntd placeholder="Busca lo que quieras.." />;
}

export default Search;
