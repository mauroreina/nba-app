import React from "react";
import { CssBaseline, Box, Container, TextField, Grid } from "@mui/material";
import useMain from "./hook";
import { CardPlayer } from "../../components/cardPlayer";

export const Main = () => {
  const { search, findData } = useMain();
  return (
    <>
      <CssBaseline />
      <Container fixed mb={5}>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100%" }} mb={5}>
          <Grid spacing={2} mb={5} mt={5}>
            <Grid xs={12} spacing={2} mb={5}>
              App: List of all pairs of players in height
            </Grid>
            <Grid xs={12} spacing={2}>
              <TextField
                id="outlined-basic"
                label="Type height here"
                variant="outlined"
                onChange={findData}
                type="number"
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            {search.map((s) => (
              <Grid item xs={3}>
                <CardPlayer player={s} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};
