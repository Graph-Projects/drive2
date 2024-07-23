import { NavLink } from "react-router-dom";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import CategoriesCard from "../components/Categories/CategoriesCard";

//test pour la branche ;

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    axios.get(`http://127.0.0.1:8000/api/v1/products`).then((response) => {
      setProducts(response.data);
    });
  };

  const getCategories = () => {
    axios.get(`http://127.0.0.1:8000/api/v1/categories`).then((response) => {
      console.log(response.data);
      setCategories(response.data);
    });
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <div className="size-full bg-black h-7"></div>
      <div className="flex flex-row items-center justify-between pr-20 border-b-2">
        <img
          src="src/assets/images/snap&savor.png"
          alt="logo drive"
          className="w-28"
        />
        <SearchBar />
        <div>
          <NavLink to={"drive/login"}>Inscription / Connexion</NavLink>
        </div>
      </div>
      <div className="flex justify-center m-3">
        <Header />
      </div>
      <div className="flex flex-col">
        <img src="src/assets/images/Breadcrumbs.png" alt="image legumes" />
        <div className="flex justify-center items-center gap-5">
          <img
            src="src/assets/images/Image-legumes.png"
            alt="image basket avec des legumes"
            className="w-5/12	"
          />
          <div className="flex flex-col">
            <h2>
              Aliments bio, frais <br /> et sains
            </h2>
            <p className="text-xs text-green-950">
              Satisfaction garantie sur tous vos achats.
            </p>
            <button className="btn border rounded-xl m-10 ">
              Achetez maintenant
            </button>
          </div>
        </div>
      </div>
      {/* Four containers details drive */}
      <div className="flex justify-center w-full">
        <div className="container-steps flex justify-center gap-5 mt-16">
          <div className="step">
            <div className="rounded-full bg-white">
              <img
                src="src/assets/images/delivery-truck.png"
                alt="furgon livraison"
              />
            </div>
            <p>
              <strong>Préparation rapide</strong>
            </p>
            <p className="text-xs">Préparation rapide avec remise.</p>
          </div>
          <div className="border m-2 border-solid"></div>
          <div className="step">
            <div className="rounded bg-white">
              <img
                className="rounded-full"
                src="src/assets/images/Group.png"
                alt="furgon livraison"
              />
            </div>
            <p>
              <strong>Excellent support 24/7</strong>
            </p>
            <p className="text-xs">Accès instantané au contact.</p>
          </div>
          <div className="border m-2 border-solid"></div>
          <div className="step">
            <div className="rounded bg-white">
              <img
                className="rounded-full"
                src="src/assets/images/shopping-bag.png"
                alt="furgon livraison"
              />
            </div>
            <p>
              <strong>Paiement 100% sécurisé</strong>
            </p>
            <p className="text-xs">
              Nous garantissons que votre argent est en sécurité.
            </p>
          </div>
          <div className="border m-2 border-solid"></div>
          <div className="step">
            <div className="rounded bg-white">
              <img
                className="rounded-full"
                src="src/assets/images/carton.png"
                alt="furgon livraison"
              />
            </div>
            <p>
              <strong>Garantie de remboursement</strong>
            </p>
            <p className="text-xs">Remboursement immédiat sur place.</p>
          </div>
        </div>
      </div>
      <div className="second-container flex flex-col items-center">
        <h2 className="text-center mt-10">Présentation de nos produits</h2>
        <div className="products-pres gap-5 grid grid-cols-4 justify-items-center mt-10 w-3/4">
          {products.slice(0, 8).map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-center mt-10 border-b-2">Top Categories</h2>
        <div className="flex mt-9 gap-9">
          {categories &&
            categories
              .slice(0, 5)
              .map((category) => (
                <CategoriesCard key={category.id} category={category} />
              ))}
        </div>
      </div>
      {/* Products and drive Feedbacks */}
      <div className="mt-10 mb-20">
        <h2 className="text-center">Ce que nos Clients disent sur Nous</h2>
      </div>
      {/* <div className="mb-80"></div> */}
      <Footer />
    </>
  );
};
export default Homepage;
