import { Navbar, NavbarBrand } from "reactstrap";
import NucampLogo from "../app/assets/img/logo.png";

// Task 3 - Part 1: Create the Header component and modify App.js
const Header = () => {
  return (
    <Navbar dark color="primary">
      <NavbarBrand href="/">
        <img src={NucampLogo} alt="Nucamp Logo" className="float-start" />
        Nucamp
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
