import { NavLink, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      name: username,
      password: password,
      email: email,
    };

    try {
      axios
        .post(`http://127.0.0.1:8000/api/v1/login`, data)
        .then((response) => {
          console.log(response);
          const token = response.data.token; //  token est dans response.data.token

          // Sauvegarder le token dans le localStorage
          localStorage.setItem("token", token);
          navigate("/");
        })
        .catch((error) => {
          console.error("There was an error with the login request:", error);
        });
    } catch (e) {
      console.log(e);
    }
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
      <div className="flex justify-center m-3"></div>
      <div className="flex items-center justify-center m-3">
        <Header />
      </div>
      <img src="../src/assets/images/Breadcrumbs.png" alt="image legumes" />
      <div className="mt-20 flex items-center justify-center mb-48">
        <div className="container-form flex flex-col w-96 h-80 items-center justify-center rounded">
          <h2 className="mb-5">Connexion</h2>
          <form
            onSubmit={handleLogin}
            className="flex flex-col items-center justify-center gap-5"
          >
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="rounded border w-80"
              type="text"
              placeholder="Username"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded border w-80"
              type="email"
              placeholder="Email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" rounded border w-80"
              type="password"
              placeholder="Mot de passe"
            />
            <div className="flex w-96 justify-around text-gray-500 text-sm">
              <div className="flex gap-1">
                <input type="checkbox" />
                <p>Se souvenir de moi</p>
              </div>
              <NavLink>
                <p>Mot de passe oublié</p>
              </NavLink>
            </div>
            <button className="bg-green-600 text-white border w-80 rounded">
              Se connecter
            </button>
          </form>
          <div className="flex mt-5">
            <p className="text-sm text-gray-500">
              Vous n’avez pas un compte?
              <NavLink to={"/drive/register"}>
                <span className="text-black"> S'inscrire</span>
              </NavLink>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Login;
