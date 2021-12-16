const form = document.getElementById("form");
const username = document.getElementById("username");
const wand = document.getElementById("wand");
const email = document.getElementById("email");
const password = document.getElementById("pass");
const password2 = document.getElementById("pass2");

form.addEventListener("submit", (e) => {
  //es para evitar el comportamiento default, que es justamente, submit
  e.preventDefault();
  console.log("apreté submit!");
  validate();
});

//vamos a llamar cada validacion en una sola funcion:
const validate = () => {
  console.log("validate");
  //tenemos un problema! los espacios los toma como caracteres! para evitar eso, usamos una funcion llamada trim: va a quitar los espacios al ppio y al final:
  const user = username.value.trim();

  //vamos a hacer las comprobaciones:
  if (user === "") {
    let errorMessage = "el user no puede estar vacío";
    inputError(username, errorMessage);
  } else if (user.length < 2 || user.length > 30) {
    let errorMessage =
      "El nombre de usuario debe tener entre 2 y 30 caracteres";
    inputError(username, errorMessage);
  } else {
    inputSuccess(username);
  }
};

//*vamos a validar si el form se rellenó bien:
const inputSuccess = (input) => {
  const inputParent = input.parentElement;
  //con querySelector nos va a agarrar el primero en que la etiqueta coincida. Si fuera querySelectorAll, nos agarraría todos
  const small = inputParent.querySelector("small");
  inputParent.classList.add("success");
  inputParent.classList.remove("error");
  small.innerHTML = "";
  console.log("success!");
};

//*o si se rellenó mal:
//agrego un parámetro que va a ser el texto de error de los small, que va a ser personalizado
const inputError = (input, message) => {
  const inputParent = input.parentElement;

  const small = inputParent.querySelector("small");
  inputParent.classList.add("error");
  inputParent.classList.remove("success");

  small.classList.add("error");
  small.innerHTML = message;

  console.log(message);
};
