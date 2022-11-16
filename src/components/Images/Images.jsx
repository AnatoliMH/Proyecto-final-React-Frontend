import React from "react";
import "./Images.css";
import imagenVideojuegos from "../../assets/images/videojuegos.jpg";

const Collage = () => {
  return (
    <img id="imgVideogame" alt="videojuegos" src={imagenVideojuegos}></img>
  );
};

export default Collage;
