import React, {useState} from "react";
import AddContributor from "./AddContributor";
import ContributorList from "./ContributorList";
import {BaseColaboradores} from "../repository/BaseColaboradores";
import {nanoid} from "nanoid";
import SearchBar from "./SearchBar";
import isFormValid from "./FormValidation";

function PageContainer() {
  /***********   estados inicial a ocupar por cada componente    ***********/
  const [auxCollaborators, setAuxCollaborator] = useState(BaseColaboradores);
  const [collaborators, setCollaborator] = useState(BaseColaboradores);
  /***********   metodo encargado de manejar y validar el ingreso  de collaboradores a la lista   ***********/
  const handleAddContributor = (name, email) => {
  /*********** validacion de datos ingresados por el usuario ***********/
   if (!isFormValid( name, email, collaborators)){
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