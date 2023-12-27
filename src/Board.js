import Column from './Column.js';

export default class Board{
    constructor(name, description){
        this.name = name;
        this.hours = this.getHoursBoard;
        this.description = description;
        this.columns = [];
    }

    getHoursBoard(){
        return this.columns.reduce((totalHoras, column)=>totalHoras+= column.getHoursCards(),0)
    }

    addColumn(name){
        this.columns.push(new Column(name))
    }

    removeColumn(name){
        const columnsNames = this.columns.map(column => column.name)
        console.log(`lista de nomes: ${columnsNames}`)
        if(columnsNames.includes(name)){
            this.columns = this.columns.filter(column => column.name != name)
        }
    }

    addCard({columnName,cardName,cardDescription, cardHours}){
        const coluna = this.columns.find(column => column.name == columnName)
        if(coluna){
            coluna.addCard(cardName,cardDescription, cardHours)
        }
    }
    removeCard({columnName, cardName}){
        const coluna = this.columns.find(column => column.name == columnName)
        if(coluna){
            coluna.removeCard(cardName)
        }
    }
}