import { card } from "./card.model";

export class cardService{
    public cards:card[] = [
        new card('', 'cpu', 'unidad central de procesamiento', 2),
        new card('', 'gpu', 'unidad de procesamiento grafica', 5)]

        deleteCard(card:any){
            const index:number = this.cards.indexOf(card);
            this.cards.splice(index,1);
        }

        updateCounter(counter:number, element:any){
            const index:number = this.cards.indexOf(element);
            this.cards[index].counter = counter;
        }
}