import { React } from "react";
import { useForm } from "react-hook-form";
import "./Formulario.css";

const Formulario = ({ title, setFilters }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setFilters(data);
  };

  /* selectores
          <select
          name="select"
          id="selectBrand"
          className="register"
          {...register("name")}
        >
          <option value="">Todos los juegos</option>
          <option value="assassin">Assassin's Creed</option>
          <option value="whatch">Whatch Dogs</option>
          <option value="mario">Mario</option>
          <option value="pokemon">Pokemon</option>
          <option value="gta">Grand Theft Auto</option>
          <option value="red">Red Dead Redemption</option>
          <option value="call">Call of Duty</option>
          <option value="fifa">Fifa</option>
          <option value="sims">Los Sims</option>
          <option value="need">Need for Speed</option>
        </select>

        <label>Selecciona la relevancia</label>
        <select
          name="select"
          className="register"
          {...register("relevance")}
        >
          <option value="">Cualquier relevancia</option>
          <option value="1">1*</option>
          <option value="2">2*</option>
          <option value="3">3*</option>
          <option value="4">4*</option>
          <option value="5">5*</option>
          </select>
          
                  <label>Filtrar por empresa</label>
                  <input
                    type="text"
                    name="select"
                    className="register"
                    placeholder="Cualquier empresa"
                    {...register("manufacter")}
                  ></input>
   */

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="formulario">
        <div className="contTitulo">
          <h1>{title}</h1>
        </div>
        <label>Busca el juego</label>
        <input
          type="text"
          name="select"
          className="register"
          placeholder="Cualquier juego"
          {...register("name")}
        ></input>
        <br />

        <label>Precio máximo</label>
        <input
          type="number"
          name="price"
          className="register"
          {...register("price")}
        />

        <br />
        <input id="button" type="submit" value="Buscar" />
      </form>
    </>
  );
};

export default Formulario;
