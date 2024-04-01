(function () {
    /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES
       ADEMAS DE COMPROBAR SI USA LET O CONST,
      SE PUEDE REFACTORIZAR, ETC.
    */
    //lista de emails de usuarios de Meta-X
    var emailList = [
        "email1@gmail.com",
        "email1@gmail.com",
        "email1@gmail.com",
    ];
    console.log(emailList);
    //Lista de compras de un carrito
    var cart = [
        { product: "switch" },
        { product: "X-box Controller" },
        { product: "steam-gift-card" },
    ];
    console.log(cart);
    //funcion para sumar mas 3 a un numero y retornarlo
    var sumFunction = function (number) {
        return number + 3;
    };
    console.log(sumFunction(2));
    //funcion para capitalizar una palabra pasara por params
    //idente o refactorice de ser necesario
    //el resultado no deberia cambiar
    var capi = function (word) {
        var concatWord = word.toLowerCase();
        return concatWord.charAt(0).toUpperCase() + concatWord.substring(1);
    };
    console.log(capi("cAPrIcOrn"));
    //variable que alerta en caso de que algun evento suceda
    var alertEvent = true;
    alertEvent ? console.log("event") : null;
    //variable que se encarga de verificar
    //si un usuario puede acceder o no
    var validation = true;
    validation ? console.log("welcome") : null;
    //variable para hallar el promedio de 3 numeros
    var average = (1 + 2 + 3) / 3;
    console.log(average);
    //variable que almacena el valor de PI
    var PI_VALUE = 3.141592654;
    console.log(PI_VALUE);
    //variabel que controla si un archivo es modificable
    var isEditableFile = false;
    isEditableFile
        ? console.log("edit this file?")
        : console.log("can't edit this file");
    //variable para almacenar el valor de e
    var EULER_VALUE = 2.718281828;
    console.log(EULER_VALUE);
})();
