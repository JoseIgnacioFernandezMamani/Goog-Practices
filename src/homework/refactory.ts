function calcularAreaCuadrado(lado: number) {
    const area = lado * lado;
    console.log("El área del cuadrado es:", area);
    return area;
  }
  
  function calcularAreaRectangulo(ancho: number, alto: number) {
    const area = ancho * alto;
    console.log("El área del rectángulo es:", area);
    return area;
  }
  
  const ladoCuadrado = 5;
  const areaCuadrado = calcularAreaCuadrado(ladoCuadrado);
  
  const anchoRectangulo = 4;
  const altoRectangulo = 3;
  const areaRectangulo = calcularAreaRectangulo(anchoRectangulo, altoRectangulo);
  