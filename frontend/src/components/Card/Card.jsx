import { NavLink } from "react-router-dom";
import "./Card.css";

const Card = ({ product }) => {
  const getImageUrl = (image) => {
    if (image) {
      return "http://127.0.0.1:8000/" + image;
    }
  };
  return (
    <div className="card gap -5 flex flex-col max-h-72 w-56 border-r border-b">
      <NavLink to={`/drive/product/${product.id}`}>
        <div className="flex justify-center">
          <img
            className="w-20 rounded-md"
            src={product.image ? getImageUrl(product.image) : product.name}
            alt={"image de " + product.name}
          />
        </div>
      </NavLink>
      <div className="flex flex-col">
        <h3> {product.name}</h3>
        <p> {product.description.slice(0, 20) + "..."}</p>
        <p> {product.price + "€"}</p>
        <p> {product.category ? "Categorie(s): " + product.category : null}</p>
        <div></div>
        <div className="flex justify-end">
          <button className="flex mr-5">🛒</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
