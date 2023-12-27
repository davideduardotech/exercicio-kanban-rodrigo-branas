import Board from "./Board.js";

const board01 = new Board("Tarefas","Quadro de Tarefas");
board01.addColumn("Coluna 1");
board01.addColumn("Coluna 2");
board01.addColumn("Coluna 3");
board01.addCard({columnName:"Coluna 1",cardName:"Cartão 1",cardDescription:"Concluir o cartão 1",cardHours:1})
board01.addCard({columnName:"Coluna 1",cardName:"Cartão 2",cardDescription:"Concluir o cartão 2",cardHours:5})
board01.addCard({columnName:"Coluna 1",cardName:"Cartão 3",cardDescription:"Concluir o cartão 3",cardHours:1})
console.log(board01);

console.log(`Total de horas juntando todos os cartão e colunas: ${board01.name} | ${board01.getHoursBoard()} horas`)
board01.removeColumn("Coluna 3");
board01.removeCard({columnName:"Coluna 1",cardName:"Tarefa 1"})
console.log(board01);