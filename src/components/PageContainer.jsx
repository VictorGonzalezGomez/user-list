import React, {useState} from "react";
import AddContributor from "./AddContributor";
import ContributorList from "./ContributorList";
import {BaseColaboradores} from "../repository/BaseColaboradores";
import {nanoid} from "nanoid";
import SearchBar from "./SearchBar";

function PageContainer() {
  /***********   estados inicial a ocupar por cada componente    ***********/
  const [auxCollaborators, setAuxCollaborator] = useState(BaseColaboradores);
  const [collaborators, setCollaborator] = useState(BaseColaboradores);

  const regEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  /***********   metodo encargado de manejar y validar el ingreso  de collaboradores a la lista   ***********/
  const handleAddContributor = (name, email) => {
  /*********** validacion de datos ingresados por el usuario ***********/
    if (isEmpty(name) || isEmpty(email)){
      alert("Todos los campos son obligatorios")
      return;
    }
    else if (emailExists(email)) {
        alert("El correo ingresado ya exite, ingrese un correo valido")
      return;
    }
    else if (!regEX.test(email)){
        alert("el correo ingresado no es valido")
      return;
    }
  /*********** operatoria de agregar un collaborador a la lista ***********/
    const newCollaborators = [...collaborators, {id: nanoid(), name, email}];
    setCollaborator(newCollaborators);
    setAuxCollaborator(newCollaborators);
  }
  /*********** metodo que maneja el buscador de la  ***********/
  const handleSearchContributor = (filter) => {
    const filteredCollaborators = auxCollaborators.filter(contributor => contributor.name.includes(filter));
    setCollaborator(filteredCollaborators);
  }
  /*********** metodo para validar si el correo existe dentro de la baseColaboradores ***********/
  const emailExists = (email) => {
    return collaborators.some(function(e) {
      return e.email === email;
    });
  }
  /*********** metodo para validar si un elemento se encuentra vacio ***********/
   const isEmpty = (value) => {
    return value.length === 0;
  }

  /*********** componentes ***********/
  return(
    <>
      <SearchBar handleSearchContributor={handleSearchContributor}/>
      <AddContributor handleAddContributor={handleAddContributor}/>
      <ContributorList collaborators={collaborators}/>
    </>
  )
}
export default PageContainer;