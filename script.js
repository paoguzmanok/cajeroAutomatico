let opcion = Number(
  prompt("Elija una opción (1 consultar saldo, 2 para extraer, 3 depositar ):")
);
let saldo = 50000;
switch (opcion) {
  case 1:
    alert("su saldo es de  " + saldo);
    break;
  case 2:
    let extraer = parseInt(prompt("¿Cúanto desea extraer?"));

    if (extraer > saldo) {
      alert("su saldo es insuficiente");
    } else if (extraer < saldo) {
      alert("extracción exitosa, su saldo ahora   es de " + (saldo - extraer));
    }
    break;
  case 3:
    alert("Opción en construcción 🛠");
    break;
  default:
    alert("opción no valida");
}
