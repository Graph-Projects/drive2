import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();

  const getProduct = () => {
    axios
      .get(`http://127.0.0.1:8000/api/v1/products/${id}`)
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      });
  };
  const getImageUrl = (image) => {
    if (image) {
      return "http://127.0.0.1:8000/" + image;
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="size-full bg-black h-7"></div>
      <div className="flex flex-row items-center justify-between pr-20 border-b-2">
        <img
          src="../../src/assets/images/snap&savor.png"
          alt="logo drive"
          className="w-28"
        />
        <div>
          <NavLink to={"Inscription"}>Inscription / Connexion</NavLink>
        </div>
      </div>
      <div className="flex justify-center m-3">
        <Header />
      </div>
      <div className="flex flex-col">
        <img
          src="../../src/assets/images/Breadcrumbs.png"
          alt="image legumes"
        />
      </div>

      <div className="flex flex-col justify-center items-center mt-8">
        <div className="flex justify-center items-center gap-10 ">
          <div>
            <img className="w-96" src={getImageUrl(product.image)} alt="" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-center gap-3">
              <h2>{product.name}</h2>
              <span className="bg-green-300 rounded text-green-900 w-24 text-center text-sm ">
                {product.stock > 0 ? "Disponible" : "Pas Disponible"}
              </span>
            </div>
            <div>
              <p>Rating</p>
            </div>
            <p className="text-xl text-green-900">{product.price + "€"}</p>
            <div className="border"></div>
            <div className="border text-center bg-green-600 text-white rounded h-7">
              <button>Add to cart</button>
            </div>
            <div className="border"></div>
            <p>
              {product.category && product.category
                ? "Categorie(s) : " + product.category
                : ""}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-center text-sm">Description</p>
          <div className="border mt-4"></div>
          <p className="mt-10">{product.description && product.description}</p>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-center">Produits Suggérés</h2>
      </div>
      <div className="mt-10">
        <h3 className="text-center">Avis</h3>
      </div>
      <div className="mb-24"></div>
      <Footer />
    </>
  );
};
export default ProductDetails;
