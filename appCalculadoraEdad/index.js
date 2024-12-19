const inputDia = document.getElementById("inputDia");
const inputMes = document.getElementById("inputMes");
const inputAno = document.getElementById("inputAno");
const spanAnual = document.getElementById("resultadoAnual");
const spanMensual = document.getElementById("resultadoMensual");
const spanDiario = document.getElementById("resultadoDiario");
const botonOn = document.getElementById("botonOn")
const actualDate = new Date();

function calculadoraEdad() {
    const ano = parseInt(inputAno.value, 10);
    const mes = parseInt(inputMes.value, 10);
    const dia = parseInt(inputDia.value, 10);

    // Se verifica que los valores ingresados son numeros, de lo contrario se da una alerta de error.
    if (isNaN(ano) || isNaN(mes) || isNaN(dia)) {
        console.log("Favor ingresar un dato valido")
        return;
    }

    // Se generan las variables con los calculos correspondientes.
    let calculoAno = actualDate.getFullYear() - ano;
    let calculoMes = actualDate.getMonth() + 1 - mes;
    let calculoDia = actualDate.getDate() - dia;

    // Se ajustan los calculos si los meses ingresados son negativos.
    if (calculoDia < 0) {
        calculoMes--;
        calculoDia += new Date(actualDate.getFullYear(), actualDate.getMonth(), 0).getDate();
    }
    
    if (calculoMes < 0) {
        calculoAno--;
        calculoMes += 12;
    }

    // Mostrar los resultados en el SPAN identificado.
    spanAnual.textContent = calculoAno;
    spanMensual.textContent = calculoMes;
    spanDiario.textContent = calculoDia;

}


botonOn.addEventListener("click", calculadoraEdad)