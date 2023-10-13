//MOSTRAR DATOS DE FORMULARIO DE INGRESO
function mostrarDatos() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Validar que los campos no estén vacíos
    if (email === "" || password === "") {
      alert("Por favor, complete todos los campos.");
    } else {
      // Mostrar los datos en la consola
      console.log("Email: " + email);
      console.log("Password: " + password);
    }
  }
  
  //MOSTRAR DATOS DE FRORMULARIO DE REGISTRO
  function mostrarDatos2() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const nac = document.getElementById("nac").value;
    const emailregistro = document.getElementById("emailregistro").value;
    const passwordregistro = document.getElementById("passwordregistro").value;
    const confirmaclave = document.getElementById("confirmaclave").value;
  
    // Validar que los campos no estén vacíos
    if (nombre === "" || apellido === "") {
      alert("Por favor, complete todos los campos.");
    } else {
      // Mostrar los datos en la consola
      console.log("nombre: " + nombre);
      console.log("apellido: " + apellido);
      console.log("nac: " + nac);
      console.log("aemail registro: " + emailregistro);
      console.log("passwordregistro: " + passwordregistro);
      console.log("confirmaclave: " + confirmaclave);
    }
  }
  
  // Obtén la barra de navegación
  const nav = document.querySelector('.nav');
  
  // Obtén la posición inicial de la barra de navegación
  const navOffsetTop = nav.offsetTop;
  
  // Función para comprobar si la navegación debe volverse fija
  function checkNavFixed() {
      if (window.scrollY >= navOffsetTop) {
          nav.classList.add('nav-fixed');
      } else {
          nav.classList.remove('nav-fixed');
      }
  }
  
  // Escucha el evento de desplazamiento de la ventana
  window.addEventListener('scroll', checkNavFixed);


  
  //MOSTRAR DATOS DE FORMULARIO DELFOOTER
function mostrarDatos3() {
    const nombreMensaje = document.getElementById("nombre-mensaje").value;
    const emailMensaje = document.getElementById("email-mensaje").value;
    const mensaje = document.getElementById("mensaje").value;
  
    // Validar que los campos no estén vacíos
    if (nombreMensaje === "" || emailMensaje === "") {
      alert("Por favor, complete todos los campos.");
    } else {
      // Mostrar los datos en la consola
      console.log("nombreMensaje: " + nombreMensaje);
      console.log("emailMensaje: " + emailMensaje);
      console.log("mensaje: " + mensaje);
    }
  }