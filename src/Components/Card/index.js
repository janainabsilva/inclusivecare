import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import upload from "../../Assets/upload.jpeg";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345,background:"#F7F7F7" }}>
        <img src={upload} alt='' style={{height:"100%", width:"100%"}} ></img>
      <CardMedia
        
        
      />
      <CardContent  sx={{ height: "100px" }} >
        
        <Typography gutterBottom variant="h5" component="div">
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <LocationOnIcon/>
         <br/>
         <br/>
         <AccessTimeIcon/>

        </Typography>
      </CardContent>
     
    </Card>
  );
}