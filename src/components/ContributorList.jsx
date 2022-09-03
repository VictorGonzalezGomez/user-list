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

        { props.collaborators.map((collaborator)=> (
          <tr key={collaborator.id}>
          <td>{collaborator.id}</td>
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