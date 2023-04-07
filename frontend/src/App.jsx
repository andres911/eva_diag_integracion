import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const App = () => {
  const [idiomas, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/v1/api/Idioma/listarIdioma"
        );
        setData(response.idiomas);
      } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h1">API Consumer</Typography>
      <List>
        {idiomas &&
          idiomas.map((idioma) => (
            <ListItem key={idioma._id}>
              <ListItemText primary={idioma.descripcion} />
            </ListItem>
          ))}
      </List>
    </Container>
  );
};

export default App;
