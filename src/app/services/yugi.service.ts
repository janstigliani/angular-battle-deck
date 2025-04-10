import { effect, Injectable, InputSignal, signal } from '@angular/core';
import { YugiCard } from '../models/yugi-card';

@Injectable({
  providedIn: 'root'
})
export class YugiService {

  readonly BASE_URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
  cardArray = signal<YugiCard[]>([]);
  number = 100;
  selectedYugiCard = signal<YugiCard|undefined>(undefined);
  deck1 = signal<YugiCard[]>([]);
  deck2 = signal<YugiCard[]>([]);
  deck1IsSelected = true;

  constructor() { 
    effect(() => {
      this.getCards();
    })
  }

  async getCards() {
    const url= this.BASE_URL + "?num="+ this.number + "&offset=0&type=Normal%20Monster"

    const data = await fetch(url).then(res => res.json())
    this.cardArray.set(data.data)
  }

  selectedCard(name: InputSignal<string>) {
    this.selectedYugiCard.set(this.cardArray().find((card:YugiCard) => card.name === name()));
    this.updateDeck();
  }

  updateDeck() {
    if (this.deck1IsSelected && this.deck1().length < 5 && this.selectedYugiCard()) {
      this.deck1.update((oldArray: YugiCard[]) => {
        const newArray = [...oldArray];
        newArray.push(this.selectedYugiCard()!);
        return newArray;
      });
    } else if (this.deck2().length < 5 && this.selectedYugiCard()) {
      this.deck2.update((oldArray: YugiCard[]) => {
        const newArray = [...oldArray];
        newArray.push(this.selectedYugiCard()!);
        return newArray;
      });
    }
  }
}
