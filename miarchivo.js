
const productos = [
    { id: 1, nombre: "maquina pen", precio: 250000 },
    { id: 2, nombre: "agujas", precio: 16990 },
    { id: 3, nombre: "set tintas", precio: 69000 },
    { id: 4, nombre: "fuente de poder", precio: 49990 },
    { id: 5, nombre: "cups 100", precio: 2500 },
  ];
  
  function addItem() {
    let nombre = prompt("Ingrese el nombre del producto");
    let producto = productos.find((item) => item.nombre === nombre);
    if (producto === undefined) {
      alert("producto no encontrado");
    } else {
      let table = document.getElementById("tabla");
      var row = table.insertRow();
      var cell1 = row.insertCell();
      var cell2 = row.insertCell();
      cell1.innerHTML = producto.nombre;
      cell2.innerHTML = producto.precio;
    }
  }

  //Usar para verificar el total invertido
  /*const mercado = [
    { id: 1, nombre: "maquina pen", precio: 100000 },
    { id: 2, nombre: "agujas", precio: 10000 },
    { id: 3, nombre: "set tintas", precio: 25000 },
    { id: 4, nombre: "fuente de poder", precio: 20000 },
    { id: 5, nombre: "cups 100", precio: 1000 }
  ];
  const mercadoActualizados = mercado.map(item => {
    return {
      id: item.id,
      nombre: item.nombre,
      precio: item.precio + item.precio * 0.21 
    }
  });
  console.log(mercadoActualizados);

  const total = mercado.reduce((acumulador, item) => acumulador + item.precio, 0);
  console.log(total);*/


  class Insumos{
    constructor(nombre, precio, cantidad){
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;    
    }
  
    vender(){
      this.cantidad = this.cantidad - 1;
    }
  }
  
  const insumo1 = new Insumos("maquina pen", 250000, 10);
  const insumo2 = new Insumos("agujas",16990 , 20);
  const insumo3 = new Insumos("set tintas", 69000 , 10);
  const insumo4 = new Insumos("fuente de poder",49990 , 10);
  const insumo5 = new Insumos("cups 100", 2500 , 20);
  
  console.log(insumo1);
  insumo1.vender();
  console.log(insumo1);

  console.log(insumo2);
  insumo2.vender();
  console.log(insumo2);

  console.log(insumo3);
  insumo3.vender();
  console.log(insumo3);

  console.log(insumo4);
  insumo4.vender();
  console.log(insumo4);

  console.log(insumo5);
  insumo5.vender();
  console.log(insumo5);