import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const CategoriesUpdate = () => {
  const [category, setCategory] = useState({});
  let { id } = useParams();

  const getCategoryById = () => {
    axios
      .get(`http://127.0.0.1:8000/api/v1/categories/${id}`)
      .then((response) => {
        console.log(response);
        setCategory(response.data);
      });
  };

  const handleInputName = (e) => {
    console.log(e.target.value);
    e.persist();
    console.log({ ...category, [e.target.name]: e.target.value });
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const updateCategory = (e) => {
    e.preventDefault();

    const data = {
      name: category.name,
      sub_categories: [],
    };

    axios
      .put(`http://127.0.0.1:8000/api/v1/categories/${id}`, data)
      .then((response) => {
        console.log(response);
        setCategory(response.data);
        alert(response.data.message);
        navigate("/drive/categories");
      });
  };

  useEffect(() => {
    getCategoryById();
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <h2> Modifier la Categorie</h2>
      </div>
      <form
        onSubmit={(e) => {
          updateCategory(e);
        }}
        className="flex flex-col justify-center items-center gap-5 mt-14"
      >
        <label>Nom categorie</label>

        <input
          required
          value={category.name || ""}
          onChange={(e) => handleInputName(e)}
          className="border w-64"
          type="text"
          name="name"
        />
        <div>
          <button className="border w-64 text-green-600" type="submit">
            Modifier
          </button>
        </div>
      </form>
    </>
  );
};
export default CategoriesUpdate;
