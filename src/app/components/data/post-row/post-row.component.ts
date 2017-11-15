import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-row',
  templateUrl: './post-row.component.html',
  styleUrls: ['./post-row.component.css']
})
export class PostRowComponent implements OnInit {
  @Input() id: string;
  @Input() likes: number;
  @Input() comments: number;

  constructor() { }

  ngOnInit() {
  }

}
