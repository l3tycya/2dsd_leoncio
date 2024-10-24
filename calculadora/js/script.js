
function calcular(){
  const n1 = Number(numero1.value)
  const n2 = Number(numero2.value)
  if(typeof n1 === 'number' && typeof n2 === 'number') {

    const add = `O Resultado da Adição ${n1} + ${n2} = ${n1+n2}`
      adicao.innerHTML = add
      //alert(adicao)

      const sub = `O Resultado da Subtração ${n1} - ${n2} = ${n1-n2}`
      subtracao.innerHTML = sub
      //alert(subtracao)

      const mul = `O Resultado da Multiplicação ${n1} x ${n2} = ${n1*n2}`
      multiplicacao.innerHTML = mul
      //alert(multipliacacao)

      const div = `O Resultado da Divisão ${n1} / ${n2} = ${n1/n2}`
      divisao.innerHTML = div
      //alert(divisao)
  } else{
      alert('Por favor, digeite um número legitimo')
  }
}
//Adiciona Esculta de Evento
btnCalcular.addEventListener('click', function (evento){
  evento.preventDefault() //Tirar o comportamento padrão
  calcular()
})