var resultado = ""
var resultado1 = ""
function calcularregrade3 () {
    var valor1, valor2, valor3

    valor1 = document.getElementById('valor1').value 
    valor2 = document.getElementById('valor2').value
    valor3 = document.getElementById('valor3').value

    resultado1 = resultado;

    resultado = (valor2 * valor3) / valor1

    document.getElementById('resultado').value = resultado 
      document.getElementById('resultado1').textContent = resultado1
   

}

