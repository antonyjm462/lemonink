import { Injectable } from '@angular/core';
import blogs from './../Database/blog_post.json';
import projects from './../Database/projects.json';
import devs from './../Database/Database/dev.json';
import { Data } from 'src/app/model/data';


@Injectable({
  providedIn: 'root'
})
export class PocketDBService {
  public blogList:Data[] = blogs;
  public devList:Data[] = devs;
  public projects: Data[] = projects;

  constructor() { }

  getProjects() {
    return projects;
  }

  getBlogs(){
    return blogs;
  }

  getDevs(){
    return devs;
  }
}
