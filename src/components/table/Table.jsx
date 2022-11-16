import React from "react";
import "./Table.css";
import estrella from "../../assets/images/estrella.png";

const Table = ({ data, showManufacterData, setOrder, setSortField }) => {
  /*

<table className="table">
  <caption className="tableTitle">Resultados de la búsqueda</caption>
  <thead>
    <tr>
      {Object.keys(data[0]).map((keyName, index) => {
        return (
          keyName !== "_id" && (
            <th key={"th_" + index} className="first-row">
              {keyName}
            </th>
          )
        );
      })}
    </tr>
  </thead>
  <tbody>
    {data.map((elem, index) => {
      return (
        <tr
          key={index}
          className="row-data"
          onClick={() => showManufacterData(elem._id)}
        >
          {Object.values(elem).map((data, index) => {
            return index !== 0 && <td key={"td_" + index}>{data}</td>;
          })}
        </tr>
      );
    })}
  </tbody>
</table>

   */
  return (
    <div className="contTable">
      <div className="contSort">
        <h3>Ordenar por:</h3>
        <div className="contButton">
          <button
            className="buttonSort"
            onClick={(e) =>
              setOrder((prev) => (prev === -1 ? 1 : -1), setSortField("name"))
            }
          >
            Nombre
          </button>
          <button
            className="buttonSort"
            onClick={(e) =>
              setOrder(
                (prev) => (prev === -1 ? 1 : -1),
                setSortField("relevance")
              )
            }
          >
            Relevancia
          </button>
          <button
            className="buttonSort"
            onClick={(e) =>
              setOrder((prev) => (prev === -1 ? 1 : -1), setSortField("price"))
            }
          >
            Precio
          </button>
        </div>
      </div>

      <div className="contCards">
        <>
          {data.map((elem, index) => {
            return (
              <div
                key={index}
                className="card"
                onClick={() => showManufacterData(elem._id)}
              >
                <h2 className="cardTitle">{elem.name}</h2>
                <hr></hr>
                <div className="contAttributes">
                  <div className="contRelevance">
                    <img alt="estrella" id="estrella" src={estrella}></img>
                    <p>{elem.relevance} / 5</p>
                  </div>
                  <p>Precio: {elem.price}€</p>
                </div>
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
};

export default Table;
