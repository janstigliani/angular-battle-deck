import { Component, effect, inject, signal } from '@angular/core';
import { YugiService } from '../../services/yugi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-decks',
  imports: [CommonModule],
  templateUrl: './decks.component.html',
  styleUrl: './decks.component.scss'
})
export class DecksComponent {

  deck1Atk = signal(0);
  deck1Def = signal(0);
  deck2Atk = signal(0);
  deck2Def = signal(0);
  service = inject(YugiService);
  winner = signal("");

  constructor() {
    effect(() => {
      this.calculateNum1()
    })
    effect(() => {
      this.calculateNum2()
    })
  }

  calculateNum1() {

    this.deck1Atk.set(0);
    this.deck1Def.set(0);
    for (const card of this.service.deck1()) {
      this.deck1Atk.update(oldValue => oldValue + card.atk);
      this.deck1Def.update(oldValue => oldValue + card.def);
    }

  }

  calculateNum2() {
    this.deck2Atk.set(0);
    this.deck2Def.set(0);
    for (const card of this.service.deck2()) {
      this.deck2Atk.update(oldValue => oldValue + card.atk);
      this.deck2Def.update(oldValue => oldValue + card.def);
    }

  }

  compareDecks() {
    const atk1 = this.deck1Atk()-this.deck2Def();
    const atk2 = this.deck2Atk()-this.deck1Def();

    if (atk1>atk2) {
      this.winner.set("Deck 1")
    } else if (atk1 === atk2) {
      this.winner.set("Draw")
    } else {
      this.winner.set("Deck 2")
    }
  }

  selectDeck1() {
    this.service.deck1IsSelected = true;
  }
  selectDeck2() {
    this.service.deck1IsSelected = false;
  }

  clearArrayAndNum() {
    this.deck1Atk.set(0);
    this.deck1Def.set(0);
    this.deck2Atk.set(0);
    this.deck2Def.set(0);
    this.winner.set("");
    this.service.clearDeckArrays();
  }

}
