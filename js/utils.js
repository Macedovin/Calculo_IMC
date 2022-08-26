/* EXPORTANDO AS FUNÇÕES */

/* VALIDAÇÃO DE NÚMERO */

export function notANumber(value) {
  return isNaN(value) || value == ''
}

/* CALCULANDO O IMC */

export function calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}
