import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoryStore = () => {
  const [category, setCategory] = useState({
    name: "",
  });

  const handleInput = async (e) => {
    e.persist();
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const storeCategory = (e) => {
    e.preventDefault();
    const data = {
      name: category.name,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post("http://127.0.0.1:8000/api/v1/categories", data, { headers })
      .then((response) => {
        setCategory(response.data);
        alert(response.data.message);
        navigate("/drive/categories");
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
      <h2 className="text-center">Ajouter une categorie</h2>
      <div className="flex flex-col items-center mt-8">
        <form className="flex flex-col gap-11" onSubmit={storeCategory}>
          <div className="flex flex-col">
            <label htmlFor="">Nom categorie :</label>
            <input
              className="border rounded"
              required
              type="text"
              value={category.name}
              onChange={(e) => handleInput(e)}
              name="name"
            />
          </div>
          <div>
            <button className="btn rounded" type="submit">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default CategoryStore;
