(() => {
  /* APLICA DRY */

  //EX - 1

  function calculateOperation1(a: number, b: number, c: number): number {
    let sumResult = a + b;
    let multiplicationResult = sumResult * c;
    return multiplicationResult;
  }

  /*
Son dos funciones completamente iguales, no hay necesidad de mantener las 2.
   function calculateOperation2(x: number, y: number, z: number): number {
    let sumResult = x + y;
    let multiplicationResult = sumResult * z;
    return multiplicationResult;
  }
 */
  // EX - 2

  /* 
  function calculateArea(value1 : number, value2 ?: number) : number{
    if(value2 === undefined){
      return value1 * Math.PI * Math.pow(value1,2);
    }
    else{
      return value1 * value2;
    }
  }
  const rectangleArea = calculateArea(5, 10);
  const circleArea = calculateArea(3); 
  console.log(rectangleArea);
  console.log(circleArea);
 */

  //otra forma
  interface CalculateArea {
    calculate(length?: number, width?: number, radius?: number): number;
  }

  class CalculateRectangleArea implements CalculateArea {
    calculate(length: number, width: number): number {
      return length * width;
    }
  }

  class calculateCircleArea implements CalculateArea {
    calculate(radius: number): number {
      return Math.PI * radius * radius;
    }
  }

  let circle = new calculateCircleArea();
  let rectangle = new CalculateRectangleArea();
  console.log("area: ", circle.calculate(4))
  console.log("area: ", rectangle.calculate(5,34))


  // EX - 3
  //No es necesario aumentar codigo en este ejercicio
  //No es necesario tener una funcion para validar un solo atributo que normalmente pertenece al mismo objeto en este caso probablemente seria el objeto usuario
  function validateEmail(email: string, username: string): boolean {
    //...some code for validate here
    return false;
  }
  /* 
  function validateUsername(username: string): boolean {
    //...some code for validate here
    return false;
  } */
})();
