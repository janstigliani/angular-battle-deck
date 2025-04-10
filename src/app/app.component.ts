import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DecksComponent } from "./components/decks/decks.component";
import { ListComponent } from "./components/list/list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DecksComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-battle-deck';
}
