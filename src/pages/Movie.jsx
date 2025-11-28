import React, { useRef } from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function MovieCard({ movieData }) {
  const imageRef = useRef(null);

  const handleEnter = () => {
    imageRef.current.style.transform =
      "translateY(0) rotateX(0deg) scale(1)";
    imageRef.current.style.opacity = "1";
  };

  const handleLeave = () => {
    imageRef.current.style.transform =
      "translateY(-120%) rotateX(45deg) scale(0.8)";
    imageRef.current.style.opacity = "0";
  };

  return (
    <MuiCard
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="drop-card"
      sx={{
        width: 300,
        height: 420,
        borderRadius: 3,
        background: "#111",
        perspective: "1200px",
        position: "relative",
        overflow: "visible",
        boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        image={movieData.Poster}
        alt={movieData.Title}
        ref={imageRef}
        className="drop-image"
      />

      <CardContent sx={{ textAlign: "center", color: "white" }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {movieData.Title}
        </Typography>
        <Typography variant="body2">{movieData.Year}</Typography>
      </CardContent>
    </MuiCard>
  );
}

export default MovieCard;
