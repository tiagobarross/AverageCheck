const students = [
  {
    name: "João",
    note1: 9,
    note2: 6
  },

  {
    name: "Letícia",
    note1: 2,
    note2: 5
  },

  {
    name: "Tiago",
    note1: 7,
    note2: 9
  },

  {
    name: "Júlia",
    note1: 4,
    note2: 3
  }
]

function AverageCalc(student){
   const media = (student.note1 + student.note2) / 2

   if(media >= 7){
    return `A média de ${student.name} é: ${media}.
    Parabéns ${student.name}, você foi aprovado! `
   } else{
    return `A média de ${student.name} é: ${media}. Não foi dessa vez ${student.name}, você foi reprovado.`
   }
}

for(let student of students){
  alert(AverageCalc(student))
}