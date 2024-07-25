import { NavLink, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const data = {
      name: username,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation,
    };

    try {
      axios
        .post(`http://127.0.0.1:8000/api/v1/register`, data)
        .then((response) => {
          console.log(response);

          setUsername(username);
          setEmail(email);
          setPassword(password);
          setPasswordConfirmation(passwordConfirmation);

          alert(response.data.message);
          navigate("/drive/login");
        });
    } catch (error) {
      console.log(error);
      console.log("Essayer à nouveau");
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
      <div className="mt-20 flex items-center justify-center mb-32">
        <div className="container-form flex flex-col w-96 h-96 items-center justify-center rounded">
          <h2 className="mb-5">Créer mon compte</h2>
          <form
            onSubmit={handleRegister}
            className="flex flex-col items-center justify-center gap-5"
          >
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="rounded border w-80"
              type="text"
              placeholder="Username"
              name="name"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded border w-80"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className=" rounded border w-80"
              type="password"
              placeholder="Mot de passe"
              name="password"
            />
            <input
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              value={passwordConfirmation}
              className=" rounded border w-80"
              type="password"
              placeholder="Confirmer mot de passe"
              name="password_confirmation"
            />
            <button
              type="submit"
              className="bg-green-600 text-white border w-80 rounded"
            >
              Créer mon compte
            </button>
          </form>
          <div className="flex mt-5">
            <p className="text-sm text-gray-500">
              Déja un compte?
              <NavLink to={"/drive/login"}>
                <span className="text-black"> Connectez-vous</span>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Register;
