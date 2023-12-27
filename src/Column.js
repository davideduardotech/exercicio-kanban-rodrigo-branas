import Card from "./Card.js";

export default class Column{
    constructor(name, count_card_time=true){
        this.name = name;
        this.hours = this.getHoursCards;
        this.count_card_time = count_card_time;
        this.cards = []
    }

    getHoursCards(){
        if(this.count_card_time){
            return this.cards.reduce((totalHoras, card)=>totalHoras+= card.hours, 0);
        }
        return 0;
    }

    addCard(name, description, hours){
        this.cards.push(new Card(name, description, hours))
    }

    removeCard(name){
        const cardNames = this.cards.map(card => card.name)
        if(cardNames.includes(name)){
            this.cards = this.cards.filter(card => card.name != name)
        }
    }


}