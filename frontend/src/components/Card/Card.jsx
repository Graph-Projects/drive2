import { NavLink } from "react-router-dom";
import "./Card.css";

const Card = ({ product }) => {
  const getImageUrl = (image) => {
    if (image) {
      return "http://127.0.0.1:8000/" + image;
    }
  };
  return (
    <div className="card gap -5 flex flex-col w-56">
      <NavLink to={`/drive/product/${product.id}`}>
        {" "}
        <img
          className="w-20 rounded-md"
          src={product.image ? getImageUrl(product.image) : product.image}
          alt={"image de " + product.name}
        />
      </NavLink>
      <div className="flex flex-col">
        <h3> {product.name}</h3>
        <p> {product.description.slice(0, 20) + "..."}</p>
        <p> {product.price + "€"}</p>
        <h1> {product.categories ? "Categorie " + product.categories : ""}</h1>
        <div></div>
      </div>
    </div>
  );
};
export default Card;
