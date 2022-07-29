import React, { useEffect, useState } from "react";
import { Container, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { api, url } from "../helpers/api";

export const Searcher = () => {
  const [textBuscar, setTextBuscar] = useState("");
  useEffect(() => {
    console.log(textBuscar);
  }, [textBuscar]);

  function buscar(texto) {
    axios
      .get(`${url}/everything?q=${texto}&${api}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Container sx={{ display: "flex", gap: 1 }}>
      <TextField
        fullWidth
        label="Buscar noticia"
        variant="outlined"
        value={textBuscar}
        onChange={(e) => setTextBuscar(e.target.value)}
      />
      <LoadingButton
        color="primary"
        disabled={textBuscar.length < 3}
        onClick={buscar(textBuscar)}
      >
        Buscar
      </LoadingButton>
    </Container>
  );
};
