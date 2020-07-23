import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router} from '@angular/router';

@Component({
  selector: 'app-tabs-page',
  templateUrl: './tabs-page.page.html',
  styleUrls: ['./tabs-page.page.scss'],
})
export class TabsPagePage implements OnInit {


  private segmentModel: any;

  constructor(private router: Router, private navCtrl:NavController) { }

  ngOnInit() {

  }

  segmentChanged(event){

  }


}
