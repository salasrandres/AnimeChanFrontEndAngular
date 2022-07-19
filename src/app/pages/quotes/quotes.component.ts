import { Component, Input, OnInit } from '@angular/core';
import { AnimeService, Quote } from 'src/app/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [];

  constructor(private animeService: AnimeService) {
    this.animeService.getRandomQuotes().subscribe(res => {
      this.quotes = res;
    });
  }

  ngOnInit(): void {
  }

  reload(): void {
    this.animeService.getRandomQuotes().subscribe(res => {
      this.quotes = res;
    });
  }

}
