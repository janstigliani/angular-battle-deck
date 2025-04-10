import { Component, inject } from '@angular/core';
import { YugiService } from '../../services/yugi.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-list',
  imports: [CommonModule, CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
 service = inject(YugiService);
}
