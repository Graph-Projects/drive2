import Products from "../components/Products/Products";
import { NavLink } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const Catalogue = () => {
  return (
    <>
      <div className="size-full bg-black h-7"></div>
      <div className="flex flex-row items-center justify-between pr-20 border-b-2">
        <img
          src="../src/assets/images/snap&savor.png"
          alt="logo drive"
          className="w-28"
        />
        {/* <SearchBar /> */}
        <div>
          <NavLink to={"drive/login"}>Inscription / Connexion</NavLink>
        </div>
      </div>
      <div className="flex justify-center m-3">
        <Header />
      </div>
      <div className="flex flex-col">
        <img src="../src/assets/images/Breadcrumbs.png" alt="image legumes" />
        <div className="flex justify-center items-center gap-5">
          <img
            src="../src/assets/images/Image-legumes.png"
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
      <Products />
      <div className="mt-10"></div>
      <Footer />
    </>
  );
};
export default Catalogue;
