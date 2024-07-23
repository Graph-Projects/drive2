import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <>
      <div className="flex gap-4 justify-center">
        <NavLink
          to={"/"}
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to={"/drive/catalogue"}
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          Catalogue
        </NavLink>
        <NavLink
          to={"/drive/categories"}
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          Categories
        </NavLink>
        <NavLink
          to={"/drive/products-list"}
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          Produits
        </NavLink>
      </div>
    </>
  );
};
export default Header;
