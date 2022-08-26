import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from'./styles.module.css';

export default function MediaCard(props) {
  return (
    <Card className={styles.backgroundCard} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="340"
        image="54a7bd0c0d9033785e7f6f2c234024e3.jpg"
        alt="Moto honda cb 750"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography className={styles.text} variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' onClick={()=> props.clickCounter(1)} disabled={props.disabled} size="small">Click me</Button>
      </CardActions>
    </Card>
  );
}
