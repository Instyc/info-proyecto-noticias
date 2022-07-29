import React, { useState } from "react";
import { NavBar } from "../components/NavBar";
import { NewsContainer } from "../components/NewsContainer";
import { Searcher } from "../components/Searcher";

export default function App() {
  const [palabra, setPalabra] = useState("");
  //aplicar contexto con la búsquedas
  return (
    <SearchContext.Provider value={{ palabra, setPalabra }}>
      <NavBar />
      <Searcher />
      <NewsContainer />
    </SearchContext.Provider>
  );
}
