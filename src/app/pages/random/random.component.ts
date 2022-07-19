import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/core';
import { Quote } from 'src/app/core/interfaces/quote';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  quote: Quote = {};
  
  constructor(private animeService : AnimeService) { }

  ngOnInit(): void {
    this.animeService.getRandom().subscribe(q => {
      this.quote = q;
    })
  }

  reload(): void {
    this.animeService.getRandom().subscribe(q => {
      this.quote = q;
    })
  }

}
