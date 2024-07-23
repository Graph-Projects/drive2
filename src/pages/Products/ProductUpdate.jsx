import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const ProductUpdate = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    categories: [],
    stock: "",
    image: "",
  });
  let { id } = useParams();

  useEffect(() => {
    getProductById(id);
    getCategories();
  }, [id]);

  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    axios.get(`http://127.0.0.1:8000/api/v1/categories/`).then((response) => {
      setCategories(response.data);
    });
  };

  const getProductById = (id) => {
    axios
      .get(`http://127.0.0.1:8000/api/v1/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      });
  };

  const handleInput = (e, type) => {
    e.persist();
    switch (type) {
      case "name":
        setProduct((currentProduct) => {
          return {
            ...currentProduct,
            name: e.target.value,
          };
        });
        return;
      case "description":
        setProduct((currentProduct) => {
          return {
            ...currentProduct,
            description: e.target.value,
          };
        });
        return;
      case "price":
        setProduct((currentProduct) => {
          return {
            ...currentProduct,
            price: e.target.value,
          };
        });
        return;
      case "stock":
        setProduct((currentProduct) => {
          return {
            ...currentProduct,
            stock: e.target.value,
          };
        });
        return;
      case "checkbox":
        setProduct((currentProduct) => {
          return {
            ...currentProduct,
            categories: [e.target.value],
          };
        });
        return;
      case "image":
        setProduct((currentProduct) => {
          return {
            ...currentProduct,
            image: e.target.files[0],
          };
        });
        return;
    }
  };

  const navigate = useNavigate();

  console.log("Product =>", product);

  const updateProduct = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", product.name);
    data.append("description", product.description);
    data.append("price", product.price);
    data.append("stock", product.stock);
    data.append("categories", JSON.stringify(product.categories));
    if (product.image) {
      data.append("image", product.image);
    }

    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post(
        `http://127.0.0.1:8000/api/v1/products/${id}?_method=PUT`,
        data,
        headers
      )
      .then((response) => {
        console.log(response);
        alert(response.data.message);
        navigate("/drive/products-list");
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
      <h2 className="text-center">Modifier produit</h2>
      <br />
      <div className="flex justify-center">
        <NavLink to={"/drive/products-list"}>
          <div className="text-center border rounded w-36 bg-green-600 text-white">
            <p className="text-center">Listing</p>
          </div>
        </NavLink>
      </div>
      <div className="container-form flex flex-col p-12">
        <form
          className="flex flex-col gap-4  items-center"
          onSubmit={updateProduct}
          encType="multipart/form-data "
        >
          <div>
            <label htmlFor="">Nom : </label>
            <br />
            <input
              className="input-form"
              name="name"
              value={product.name}
              onChange={(e) => handleInput(e, "name")}
              type="text"
              required
            />
          </div>
          <div>
            <label htmlFor="">Description : </label>
            <br />
            <textarea
              className="border"
              value={product.description}
              onChange={(e) => handleInput(e, "description")}
              name="description"
              id=""
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="">Prix : </label>
            <br />
            <input
              className="input-form"
              name="price"
              value={product.price}
              onChange={(e) => handleInput(e, "price")}
              type="text"
              required
            />
          </div>
          <div>
            <label htmlFor="">Stock : </label>
            <br />
            <input
              className="input-form"
              name="stock"
              value={product.stock}
              onChange={(e) => handleInput(e, "stock")}
              type="text"
              required
            />
          </div>
          <div className="flex gap-10">
            {categories &&
              categories.map((category) => (
                <div key={category.id}>
                  <label htmlFor="">{category.name} </label>
                  <br />
                  <input
                    onChange={(e) => handleInput(e, "checkbox")}
                    type="checkbox"
                    value={category.id}
                    name="categories"
                  />
                </div>
              ))}
          </div>
          <div>
            <label htmlFor="">Image : </label>
            <input
              name="image"
              value={""}
              onChange={(e) => handleInput(e, "image")}
              type="file"
            />
          </div>
          <button className="btn rounded" type="submit">
            Modifier
          </button>
        </form>
      </div>
    </>
  );
};
export default ProductUpdate;
