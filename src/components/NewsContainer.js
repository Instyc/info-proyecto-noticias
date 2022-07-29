import { Container } from "@mui/system";
import React from "react";
import { News } from "./News";

export const NewsContainer = () => {
  return (
    <Container sx={{ mt: 2 }}>
      <News />
    </Container>
  );
};
