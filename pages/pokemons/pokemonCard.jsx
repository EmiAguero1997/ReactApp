import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from'../styles.module.css';
import Image from 'next/image';

export default function PokemonCard(props) {

  const myLoader = ({ src }) => {
    return `${props.data.front_default}`;
  };

  return props.data ? (
    <Card className={styles.backgroundCard} sx={{ maxWidth: 345 }}>
      <CardMedia>
        <Image
          loader={myLoader}
          src={props.data.front_default}
          width="340px"
          height="340px"
          alt="pokemonImg"
        ></Image>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  ) : (
    <p>Loading...</p>
  );
}