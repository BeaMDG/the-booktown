form = document.getElementById("myForm")
form.addEventListener("submit", function(event) {
    event.preventDefault(); // evita que el formulario se envíe de forma automática
  
    // muestra el mensaje de agradecimiento en un alert
    alert("¡Gracias por tu petición!");
  
    // limpia los valores del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
  });