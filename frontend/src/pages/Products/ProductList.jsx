import axios from "axios";
import { useEffect, useState } from "react";
// import SearchBar from "../components/SearchBar/SearchBar";
import { NavLink, useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios.get("http://127.0.0.1:8000/api/v1/products").then((response) => {
      setProducts(response.data);
    });
  };

  //if image exists, get the real path to display it ;
  const getImageUrl = (image) => {
    if (image) {
      return "http://127.0.0.1:8000/" + image;
    }
  };

  const navigate = useNavigate();

  const deleteProduct = (e, id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/v1/products/${id}`)
      .then((response) => {
        console.log(response);
        alert(response.data.message);
        window.location.reload(false);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="size-full bg-black h-7"></div>
      <div className="flex flex-row items-center justify-between pr-20 border-b-2">
        <img
          src="../src/assets/images/snap&savor.png"
          alt="logo drive"
          className="w-28"
        />
      </div>
      <h2 className="text-center">Liste des produits</h2>
      <div className="flex justify-center mt-7">
        <NavLink to={"/drive/product-store"}>
          <div className="text-center border rounded w-36 bg-green-600 text-white">
            <p>+ Ajouter produit</p>
          </div>
        </NavLink>
        <NavLink to={"/"}>
          <div className="text-center border rounded w-36 bg-green-600 text-white">
            <p>Page d'accueil</p>
          </div>
        </NavLink>
      </div>

      <div className="flex flex-col gap-6 p-9">
        <div className="flex flex-col gap-5">
          {products &&
            products.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-6 border h-28 p-6"
              >
                <img
                  className="w-20 rounded"
                  src={
                    product.image ? getImageUrl(product.image) : product.name
                  }
                  alt={"image de " + product.name}
                />
                <h3> {product.name}</h3>
                <p> {product.price + "€"}</p>
                <p> {product.description.slice(0, 20) + "..."}</p>
                <p>
                  {product.categories ? "Categorie " + product.categories : ""}
                </p>
                <NavLink to={`/drive/${product.id}/product-update`}>
                  <button className="border rounded w-36 bg-green-900 text-white">
                    Modifier
                  </button>
                </NavLink>

                <button
                  onClick={(e) => {
                    deleteProduct(e, product.id);
                  }}
                  className="border rounded w-36 bg-red-600 text-white"
                >
                  Supprimer
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default ProductList;
