import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss']
})
export class DevComponent implements OnInit {
  devs: { name: string; position: string; img: string; }[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.devs = this.data.dev;
  }

}
