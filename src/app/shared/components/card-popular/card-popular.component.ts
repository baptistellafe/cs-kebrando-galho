import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kg-card-popular',
  templateUrl: './card-popular.component.html',
  styleUrls: ['./card-popular.component.scss'],
})
export class CardPopularComponent  implements OnInit {

  @Input() servico: string;

  constructor() { }

  ngOnInit() {}

}
