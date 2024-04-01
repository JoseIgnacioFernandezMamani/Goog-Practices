(() => {
  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
     ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */

  //lista de emails de usuarios de Meta-X
  const emailList: Array<string> = [
    "email1@gmail.com",
    "email1@gmail.com",
    "email1@gmail.com",
  ];

  console.log(emailList);

  //Lista de compras de un carrito
  const cart: Array<Object> = [
    { product: "switch" },
    { product: "X-box Controller" },
    { product: "steam-gift-card" },
  ];

  console.log(cart);

  //funcion para sumar mas 3 a un numero y retornarlo
  const sumFunction = (number: number): number => {
    return number + 3;
  };

  console.log(sumFunction(2));

  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar

  const toCapitalCase = (word: string): string => {
    const concatWord = word.toLowerCase();
    return concatWord.charAt(0).toUpperCase() + concatWord.substring(1);
  };

  console.log(toCapitalCase("cAPrIcOrn"));

  //variable que alerta en caso de que algun evento suceda
  let alertEvent: boolean = true;

  alertEvent ? console.log("event") : null;

  //variable que se encarga de verificar
  //si un usuario puede acceder o no
  let validation: boolean = true;

  validation ? console.log("welcome") : null;

  //variable para hallar el promedio de 3 numeros
  const average: number = (1 + 2 + 3) / 3;

  console.log(average);

  //variable que almacena el valor de PI
  const PI_VALUE: number = 3.141592654;

  console.log(PI_VALUE);

  //variabel que controla si un archivo es modificable
  let isEditableFile: boolean = false;

  isEditableFile
    ? console.log("edit this file?")
    : console.log("can't edit this file");

  //variable para almacenar el valor de e
  const EULER_VALUE: number = 2.718281828;
  console.log(EULER_VALUE);
})();
