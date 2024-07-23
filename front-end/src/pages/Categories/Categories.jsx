import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    axios.get(`http://127.0.0.1:8000/api/v1/categories`).then((response) => {
      console.log(response.data);
      setCategories(response.data);
    });
  };

  const deleteCategory = (e, id) => {
    e.preventDefault();

    axios
      .delete(`http://127.0.0.1:8000/api/v1/categories/${id}`)
      .then((response) => {
        alert(response.data.message);
        window.location.reload(false);
      });
  };

  useEffect(() => {
    getCategories();
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

      <div className="flex flex-col gap-4">
        <h2 className="text-center ">Categories</h2>
        <div className="flex items-center justify-center gap-5 ">
          <NavLink to={"/drive/category-store"}>
            <div className="flex border rounded w-36 bg-green-600 text-white ">
              <p>+ Ajouter categorie</p>
            </div>
          </NavLink>
          <NavLink to={"/"}>
            <div className="text-center border rounded w-36 bg-green-600 text-white">
              <p>Page d'accueil</p>
            </div>
          </NavLink>
        </div>
        <div className="flex flex-col ml-10">
          <div className="flex gap-8 mb-4">
            <p>Id</p>
            <p>Nom</p>
            <p></p>
            <p></p>
          </div>
          {categories &&
            categories.map((category) => (
              <div className="flex gap-8 items-center w-2/4" key={category.id}>
                <p>{category.id}</p>
                <p className="text-green-600">{category.name}</p>
                <button
                  onClick={(e) => deleteCategory(e, category.id)}
                  className="border rounded text-sm bg-red-600 text-white"
                >
                  Supprimer
                </button>
                <NavLink to={`/drive/categories/${category.id}/update`}>
                  <button className="border rounded text-sm bg-blue-600 text-white">
                    Modifier
                  </button>
                </NavLink>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default Categories;
