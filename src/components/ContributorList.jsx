import React from "react";
import Table from 'react-bootstrap/Table';

const ContributorList = (props) => {
  return (
    <div className="mx-1" >
      <h1> Listado de Colaboradores</h1>
      <Table striped bordered hover variant="dark">
        <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
        {/**********  metodo que imprime tanto la lista con todos los colaboradores como la lista filtrada **********/}
        { props.collaborators.map((collaborator,index)=> (
          <tr key={index}>
          <td>{index+1}</td>
          <td>{collaborator.name}</td>
          <td>{collaborator.email}</td>
          </tr>
          ))
         }
        </tbody>
      </Table>
    </div>
  )
}

export default ContributorList;