import axios from "axios";
import { useEffect, useState } from "react";

const CategoriesCard = ({ category }) => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    axios.get(`http://127.0.0.1:8000/api/v1/categories`).then((response) => {
      console.log(response.data);
      setCategories(response.data);
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <div className="flex border w-24 justify-center h-9 items-center text-green-600">
        {category.name}
      </div>
    </>
  );
};
export default CategoriesCard;
