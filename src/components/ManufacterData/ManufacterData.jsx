import React from "react";
import "./ManufacterData.css";

const ManufacterData = ({ data }) => {
  const {nameP, nameM, price, cif, address} = data;
  return (
    <div className="contManufacterData">
      <h1 className="titleManufacter">Información del fabricante</h1>
      <p>Juego: {nameP}</p>
      <p>Precio: {price}€</p>
      <p>Desarrolladora: {nameM}</p>
      <p>CIF: {cif}</p>
      <p>Direccion: {address}</p>
      <p></p>
    </div>
  );
};

export default ManufacterData;
