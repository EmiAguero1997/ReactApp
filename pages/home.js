
import Card from "./card";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { TextField } from "@mui/material";
import { CardHeader } from "@mui/material";
import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import {Button} from '@mui/material';
import Footer from "./footer";
import Form from "./form";
import Link from 'next/link';
import CircularProgress from '@mui/material/CircularProgress';
import Tab from "@mui/material";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import Tooltip from '@mui/material/Tooltip';


function Renderer() {
  const axios = require("axios").default;
  const [cardTitle, setCardTitle] = useState();
  const [cardDesc, setCardDesc] = useState();
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [apiData, setApiData] = useState();
  const [pokemon,setPokemon] = useState('Listado');
  const [isLoading, setIsLoading] = useState(false);

  function getData() {
    setIsLoading(true);
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      setApiData(response.data.results);
      setPokemon(response.data.results[0].name);
      setIsLoading(false);
    })
    .catch((error) =>{
        setIsLoading(false);
        console.log(error);
    })
  }

  useEffect(() => {
    counter2 == 5 &&
      (alert("You clicked 5 times"), setCounter2(0), disableBtn());
  }, [counter2]);

  function disableBtn() {
    setDisabled(true);
  }

  const handleChange = (event) => {
    setCardTitle(event.target.value);
  };

  function handleDescChange(event) {
    setCardDesc(event.target.value);
  }

  function handleSelectChange(event){
    setPokemon(event.target.value);
  }

  const clickCounter = (num) => {
    setCounter((current) => current + num);
    setCounter2((current) => current + num);
  };
  return (
    <>
      <nav className={styles.nav}>
      <CardHeader
        title="Emiserv Custom Bikes"
        className={styles.header}>
      </CardHeader>
      <Tooltip title='Login'>
      <a href='/login'><PersonPinIcon /></a>
      </Tooltip>
      </nav>
      
      <div>
        <div className={styles.textFields}>
          <TextField
            type="text"
            className={styles.title}
            placeholder="Ingrese el titulo de la card"
            onChange={handleChange}
          ></TextField>
          <b></b>
          <TextField
            type="text"
            className={styles.title}
            placeholder="Ingrese la descripcion de la card"
            onChange={handleDescChange}
          ></TextField>
        </div>
        <div className={styles.textFields}>
          <Card
            disabled={disabled}
            clickCounter={clickCounter}
            title={cardTitle ? cardTitle : "Honda CB 750"}
            description={
              cardDesc
                ? cardDesc
                : "With a powerful and reliable engine, the Honda CB 750 CC3 bike is one of the most choosed base bikes for Cafe racer bikes enthusiasts."
            }
          />
        </div>
        <h2 className={styles.textFields}>Click counter: {counter}</h2>
      </div>
      <section className={styles.container}>
        <Button variant="contained" onClick={() => getData()}>
          {isLoading && <CircularProgress/>}Get data from API
        </Button>
        {apiData && (
          <FormControl>
            <Select value={pokemon} onChange={handleSelectChange} className={styles.pokemonMenu}>
              {apiData.map((element) => (
                <MenuItem value={element.name} key={element.name}>
                  <Link
                  href={`/pokemons/${element.name}`}
                  key={element.name}
                  name={element.name}
                >
                  {element.name}
                </Link>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </section>
      <Form></Form>
      <Footer></Footer>
    </>
  );
}
export default Renderer;
