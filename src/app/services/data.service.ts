import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public projects: any = [{
    name: "PocketDB",
    content: "Django Db which can be used for storing lesser information and acessing it faster using rest Api",
    icon:"fab fa-get-pocket",
    softwares: "Django REST",
    use: "used to provide a faster database with lesser cost",
    more:"Front End using Django Python Framework, Back end using Python and database used in SQLite"
  },
  {
    name: "Mapo",
    content: "ML based app which help to plot the entire college with ease and AR for locating venues in college fest",
    icon:"fa fa-map-o",
    softwares: "Angular/React, Three.js",
    use: "Can to used to map the entire Institution, hence a outsider can use this data for traveling with ease inside the instituion",
    more:"Front End using Angular Framework, Back end using Cloud Functions and Firebase"
  },
  {
    name: "Stockify",
    content: "A Machine Learning Web Application for Smart Stock Purchase and Provide a dashboard for each user to save his preferences.",
    icon:"la la-sort-amount-asc",
    softwares: "Django",
    use: "Maily used to Know the Trends of the Market and to insights about wheather to buy a stock",
    more:"Front End using Django Python Framework, Back end using Python and database used in SQLite"
  },
  {
    name: "Socialize",
    content: "App for socializing in college, and to help each others with tasks and to borrow things from others easily",
    icon:"fab fa-get-pocket",
    softwares: "Angular",
    use: "Used to get to know other people, Share your belogings and also get new friends inside a Campus",
    more:"Front End using Angular Framework, Back end using Cloud Functions and Firebase"
  }
]


public dev = [
  {
    name:"Antony J Malakkaran",
    position: "Head Developer",
    img:"me.png"
  }
]
  constructor() { }
}
