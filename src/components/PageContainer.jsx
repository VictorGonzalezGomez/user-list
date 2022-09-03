import React, {useState} from "react";
import Navbar from "./Navbar";
import AddContributor from "./AddContributor";
import ContributorList from "./ContributorList";
import {BaseColaboradores} from "../repository/BaseColaboradores";
import {nanoid} from "nanoid";

function PageContainer() {
  const [auxCollaborators, setAuxCollaborator] = useState(BaseColaboradores);
  const [collaborators, setCollaborator] = useState(BaseColaboradores);

  const handleAddContributor = (name, email) => {
    const newCollaborators = [...collaborators, {id: nanoid(), name, email}];
    setCollaborator(newCollaborators);
    setAuxCollaborator(newCollaborators);
  }
  const handleSearchContributor = (filter) => {
    const filteredCollaborators = auxCollaborators.filter(contributor => contributor.name.includes(filter));
    setCollaborator(filteredCollaborators);
  }
  return(
    <>
      <Navbar handleSearchContributor={handleSearchContributor}/>
      <AddContributor handleAddContributor={handleAddContributor}/>
      <ContributorList collaborators={collaborators}/>
    </>
  )
}

export default PageContainer;