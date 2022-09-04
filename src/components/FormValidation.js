const EMAIL_FORMAT = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const isFormValid = (name, email, collaborators) => {
  if (!name || !email ){
    alert("Todos los campos son obligatorios")
    return false;
  }
  else if (!isEmailValid(email, collaborators)){
    return false;
  }
  return true;
}

const isEmailValid = (email, collaborators) => {
  if (emailExists(email, collaborators)) {
    alert("El correo ingresado ya exite, ingrese un correo valido")
    return false;
  }
  if (!EMAIL_FORMAT.test(email)) {
    alert("el correo ingresado no es valido")
    return false;
  }
  return true;
}

/*********** metodo para validar si el correo existe dentro de la baseColaboradores ***********/
const emailExists = (email, collaborators) => {
  return collaborators.some(function(e) {
    return e.email === email;
  });
}

export  default isFormValid;
