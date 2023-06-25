import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import teatro from "../../Assets/teatro.jpg";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345,background:"#E8E8E8" }}>
        <img src={teatro} alt='' sx={{height:"20px"}} ></img>
      <CardMedia
        
        
      />
      <CardContent  sx={{ height: "100px" }} >
        
        <Typography gutterBottom variant="h5" component="div">
          Teatro
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Recife- PE
        </Typography>
      </CardContent>
     
    </Card>
  );
}