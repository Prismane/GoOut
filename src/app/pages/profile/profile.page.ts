import { Component, OnInit } from '@angular/core';
//import { Calendar } from '@ionic-native/calendar/ngx';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  public imageUrl='../../../assets/anita.jpg'
  public party1Url='../../../assets/party1.jpg'
  public party2Url='../../../assets/party2.jpg'
  public party3Url='../../../assets/party3.jpg';
  public image2Url='../../../assets/Wendy.jpeg';
  constructor() { }

  ngOnInit() {
  }

}
