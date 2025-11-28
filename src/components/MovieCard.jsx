import React from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

function MovieCard({ movieData }) {
  return (
    <MuiCard className="simple-card" sx={{ maxWidth: 300, borderRadius: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="380"
          image={movieData.Poster}
          alt={movieData.Title}
          className="simple-image"
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {movieData.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movieData.Year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
}

export default MovieCard;
