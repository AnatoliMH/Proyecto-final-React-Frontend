import "./Container.css";
import axios from "axios";
import Table from "../table/Table";
import Formulario from "../form/Formulario";
import Paginator from "../Paginator/Paginator";
import React, { useState, useEffect } from "react";
import ManufacterData from "../ManufacterData/ManufacterData";

const Container = ({ title }) => {
  const [currentProducts, setProducts] = useState([]);
  const [currentFilters, setFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [finalPage, setFinalPage] = useState(1);
  const [manufacterAndProduct, setManufacterAndProduct] = useState();
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState(1);

  useEffect(() => {
    axios.get(getProductsURL()).then((res) => {
      const { page, totalPages, products } = res.data;
      setCurrentPage(page);
      setFinalPage(totalPages);
      setProducts(products);
    });
  }, [currentFilters, currentPage, sortField, order]);

  const getProductsURL = () => {
    let URL_PRODUCTS = "http://127.0.0.1:5000/products/search";
    if (currentFilters) {
      const { name, relevance, price, manufacter } = currentFilters;
      URL_PRODUCTS += `?name=${name || ""}&relevance=${relevance || ""}&price=${
        price || ""}&manufacter=${manufacter || ""}&orderField=${sortField || "price"}&order=${order || "1"}`;
    }
    URL_PRODUCTS += `&page=${currentPage ? currentPage : 1}`;
    console.log("URL => ", URL_PRODUCTS);
    return URL_PRODUCTS;
  };

  const showManufacterData = (id) => {
    axios.get(getManufactersURL(id)).then((res) => {
      const { name: nameP, price, manufacter } = res.data.products;
      const { name: nameM, cif, address } = manufacter;
      setManufacterAndProduct({ nameP, price, nameM, cif, address });
    });
  };

  const getManufactersURL = (id) => {
    let URL_MANUFACTERS = "http://127.0.0.1:5000/products/manufacter";
    if (id) {
      URL_MANUFACTERS += `?id=${id}`;
    }
    return URL_MANUFACTERS;
  };

  return (
    <div className="container">
      <Formulario title={title} setFilters={setFilters} />
      {currentProducts?.length && (
        <>
          <Table
            data={currentProducts}
            showManufacterData={showManufacterData}
            setOrder={setOrder}
            setSortField={setSortField}
          />
          <Paginator
            currentPage={currentPage}
            finalPage={finalPage}
            next={() => {
              setCurrentPage((prev) => (prev === finalPage ? prev : ++prev));
            }}
            prev={() => {
              setCurrentPage((prev) => (prev === 1 ? prev : --prev));
            }}
          />
          {manufacterAndProduct && (
            <ManufacterData data={manufacterAndProduct}></ManufacterData>
          )}
        </>
      )}
      {!currentProducts?.length && (
        <div className="contNoResults">
          <p>No existen resultados</p>
        </div>
      )}
    </div>
  );
};

export default Container;
