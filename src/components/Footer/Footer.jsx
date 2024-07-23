import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full h-20 bg-black">
        <div className="pr-20">
          <img
            className="w-28"
            src="../../src/assets/images/Snap&SavorWhite.png"
            alt=""
          />
        </div>
        <div className="flex text-white gap-10">
          <NavLink>
            <p>Mentions Legales</p>
          </NavLink>
          <NavLink>
            <p>Aide & Contact</p>
          </NavLink>
          <NavLink>
            <p>À propos</p>
          </NavLink>
        </div>
        <div className="flex justify-center items-center text-white gap-10">
          <p>Nous suivre :</p>
          <img
            src="src/assets/images/icons8-linkedin-48.png"
            alt="linkedin logo"
          />
          <img
            src="src/assets/images/icons8-facebook-48.png"
            alt="facebook logo"
          />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};
export default Footer;
