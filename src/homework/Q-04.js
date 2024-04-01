(function () {
    /* APLICA DRY */
    //EX - 1
    function calculateOperation1(a, b, c) {
        var sumResult = a + b;
        var multiplicationResult = sumResult * c;
        return multiplicationResult;
    }
    var CalculateRectangleArea = /** @class */ (function () {
        function CalculateRectangleArea() {
        }
        CalculateRectangleArea.prototype.calculate = function (length, width) {
            return length * width;
        };
        return CalculateRectangleArea;
    }());
    var calculateCircleArea = /** @class */ (function () {
        function calculateCircleArea() {
        }
        calculateCircleArea.prototype.calculate = function (radius) {
            return Math.PI * radius * radius;
        };
        return calculateCircleArea;
    }());
    var circle = new calculateCircleArea();
    var rectangle = new CalculateRectangleArea();
    console.log("area: ", circle.calculate(4));
    console.log("area: ", rectangle.calculate(5, 34));
    // EX - 3
    //No es necesario aumentar codigo en este ejercicio
    //No es necesario tener una funcion para validar un solo atributo que normalmente pertenece al mismo objeto en este caso probablemente seria el objeto usuario
    function validateEmail(email, username) {
        //...some code for validate here
        return false;
    }
    /*
    function validateUsername(username: string): boolean {
      //...some code for validate here
      return false;
    } */
})();
