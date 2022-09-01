import React from "react";
import Table from 'react-bootstrap/Table';

const ContributorListContainer = () => {
  return (
    <div className="mx-1" >
      <h1> Listado de Colaboradores</h1>
      <Table striped bordered hover variant="dark">
        <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Mark</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>@fat</td>
        </tr>

        </tbody>
      </Table>
    </div>
  )
}

export default ContributorListContainer;