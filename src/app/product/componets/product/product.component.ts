import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  projects: any;
  project: any;
  projectshow: boolean = false;
  constructor(private data: DataService) { 
    this.projects = this.data.projects;
    console.log(this.projects);
    this.project = this.projects[0];
  }

  ngOnInit() {
  }

  load(project){
    this.project = project;
  }

}
