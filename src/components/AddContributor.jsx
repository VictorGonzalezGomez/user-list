import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const AddContributor=(props)=> {
  /*********** estados a utilizar para la captura de datos ingresados por el usuario ***********/
const [name, setName]= useState("");
const [email, setEmail]= useState("");

  /*********** metodo encardado de llamar y enviar los datos al metodo
              handleAddContributor que agregara dichos datos a la lista ***********/
const onclick = () =>{
  props.handleAddContributor(name,email);
}
  /***********  formulario para añadir colaboradores  ***********/
  return (
    <Form className="mx-0" >
      <Form.Group as={Row} className="mb-3 mt-4 mx-0" controlId="formHorizontalName" >
        <Form.Label column sm={2}>
          Nombre del colaborador:
        </Form.Label>
        <Col sm={9} >
          <Form.Control type="text" placeholder="Ingresar el nombre del colaborador" value={name} onChange={(e)=> setName(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3 mx-0" controlId="formHorizontalEmail" >
        <Form.Label column sm={2}>
          Correo del colaborador:
        </Form.Label>
        <Col sm={9} >
          <Form.Control type="email" placeholder="Ingresar el Email del colaborador" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3 mx-0">
        <Col sm={{ span: 10, offset: 2 }} xs lg="2">
          <Button onClick={onclick} variant="warning" >Agregar colaborador</Button>
        </Col>
      </Form.Group>
    </Form>
  )
}

export default AddContributor;