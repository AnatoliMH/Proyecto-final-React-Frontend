/* Enunciado:
Como objetivo final debemos desarrollar un frontal que tenga la siguiente funcionalidad:

- Deberá mostrar todos los productos al entrar a la aplicación
- Formulario de filtrado (color, precio y marca)
- Debemos poder ordenar por precio de manera ascendiente y descendiente
- Componente para paginación que nos permita navegar entre los productos, debe mostrar en la página en la que estás, el total de productos y páginas
- Al seleccionar un producto, mostraremos los datos relativos a este y su fabricante
*/

import "./App.css";
import Header from "./components/header/Header";
import Container from "./components/container/Container";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header title="Game Store" description="React + MongoDB" />
      <Container title="Buscador"></Container>
      <Footer />
    </div>
  );
}

export default App;
