import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public projects: any = [{
    name: "PocketDB",
    content: "Django Db which can be used for storing lesser information and accessing it faster using rest API",
    icon:"fab fa-get-pocket",
    softwares: "Django REST",
    use: "used to provide a faster database with lesser cost",
    more: "Front End using Django Python Framework, Back end using Python and database used in SQLite"
  },
  {
    name: "Mapo",
    content: "ML-based app which helps to plot the entire college with ease and AR for locating venues in college fest",
    icon:"fa fa-map-o",
    softwares: "Angular/React, Three.js",
    use: "Can too be used to map the entire Institution, hence an outsider can use this data for traveling with ease inside the institution",
    more: "Front End using Angular Framework, Back end using Cloud Functions and Firebase"
  },
  {
    name: "Stockify",
    content: "A Machine Learning Web Application for Smart Stock Purchase and Provide a dashboard for each user to save his preferences.",
    icon:"la la-sort-amount-asc",
    softwares: "Django",
    use: "Mainly used to Know the Trends of the Market and to insights about whether to buy a stock",
    more: "Front End using Django Python Framework, Back end using Python and database used in SQLite"
  },
  {
    name: "Socialize",
    content: "App for socializing in college, and to help each other with tasks and to borrow things from others easily",
    icon:"fab fa-get-pocket",
    softwares: "Angular",
    use: "Used to get to know other people, Share your belongings and also get new friends inside a Campus",
    more: "Front End using Angular Framework, Back end using Cloud Functions and Firebase"
  }
]


public dev = [
  {
    name:"Antony J Malakkaran",
    position: "Head Developer",
    img:"me.png"
  },
  {
    name:"Ajay Krishnan",
    position: "Developer",
    img:"dev1.png"
  },
  {
    name:"Abhishek Ajoy Menon",
    position: "Full Stack Developer",
    img:"dev2.png"
  },
  {
    name:"Anuraj Thekan",
    position: "Developer",
    img:"dev3.png"
  },
  {
    name:"Arjun G Nair",
    position: " Backend Developer",
    img:"dev4.png"
  },
  {
    name:"Alan P Geo",
    position: "Developer",
    img:"dev5.png"
  },
  {
    name:"Alfred Nelson",
    position: "Developer",
    img:"dev6.png"
  },
  {
    name:"Ashwin Mathew",
    position: "Backend Developer",
    img:"dev7.png"
  },
  
]
  constructor() { }
}
