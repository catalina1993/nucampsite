import React from 'react';
//counter and logo import removed due to course instructions
import './App.css';
// Curly braces are required when you are importing exports that are not the default export from a module
//Presumably, I'm importing from the 'reactstrap' module, that doesnt list the following as default exports
//'reactstrap' is a third party component library I installed to this project during project setup, which gives me access to the custom components therein'
import{ Container, Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from './app/assets/img/logo.png';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary'sticky='top' expand='md'>
        <Container>
          <NavbarBrand href='/'>
            <img src={NucampLogo} alt='nucamp logo'/>
          </NavbarBrand>
        </Container>
      </Navbar>
      I'm ready for the workshop!
    </div>
  );
}

export default App;
