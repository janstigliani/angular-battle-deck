import { Component, inject } from '@angular/core';
import { YugiService } from '../../services/yugi.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-decks',
  imports: [CommonModule],
  templateUrl: './decks.component.html',
  styleUrl: './decks.component.scss'
})
export class DecksComponent {
selectDeck1() {
throw new Error('Method not implemented.');
}
selectDeck2() {
throw new Error('Method not implemented.');
}

  service = inject(YugiService);

  compareDecks() {
    throw new Error('Method not implemented.');
  }

}
