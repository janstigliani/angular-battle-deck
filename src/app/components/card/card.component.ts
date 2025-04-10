import { Component, inject, input, numberAttribute } from '@angular/core';
import { YugiService } from '../../services/yugi.service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  img = input("");
  name = input("");
  atk = input(0, {transform: numberAttribute});
  def = input(0, {transform: numberAttribute});
  service = inject(YugiService);

  constructor() {}

  selectCard() {
    this.service.selectedCard(this.name);
    }
}
