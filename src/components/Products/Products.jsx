import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Products.css";
import SearchBar from "../SearchBar/SearchBar";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [sortCriteria, setSortCriteria] = useState("default");

  const getProducts = () => {
    axios.get(`http://127.0.0.1:8000/api/v1/products`).then((response) => {
      const products = response.data;
      setProducts(products);
      filterAndSortProducts(products, searchBarValue, sortCriteria);
    });
  };

  const filterAndSortProducts = (products, searchValue, sortCriteria) => {
    let filteredProducts = products;

    if (searchValue) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          product.category.some((category) =>
            category.toLowerCase().includes(searchValue.toLowerCase())
          )
      );
    }

    if (sortCriteria === "priceLowest" && searchValue === "") {
      filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortCriteria === "priceHighest" && searchValue === "") {
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortCriteria === "newestProduct") {
      filteredProducts = filteredProducts.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
    } else if (sortCriteria === "oldestProduct") {
      filteredProducts = filteredProducts.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      );
    }

    setFilteredProducts(filteredProducts);
  };

  const handleSearchBarChange = (inputValue) => {
    setSearchBarValue(inputValue);
  };

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    filterAndSortProducts(products, searchBarValue, sortCriteria);
  }, [searchBarValue, sortCriteria, products]);

  return (
    <>
      <div className="flex justify-center gap-10">
        <select className="rounded border w-44" onChange={handleSortChange}>
          <option value="default">Tous les produits</option>
          <option value="priceHighest">Prix les plus chers</option>
          <option value="priceLowest">Prix les moins chers</option>
          <option value="newestProduct">Nos nouveautés</option>
          <option value="oldestProduct">Moins</option>
        </select>
        <SearchBar
          inputValue={searchBarValue}
          setInputValue={handleSearchBarChange}
        />
      </div>

      <div className="cards-container flex flex-wrap items-center justify-center gap-7 m-5 ">
        {filteredProducts &&
          filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Products;
