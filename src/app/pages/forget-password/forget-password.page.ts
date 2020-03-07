import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Interfaces/IUser';
import { Router } from '@angular/router';
import { FirebaseDBService } from 'src/app/services/firebase-db.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {


  private user = {} as IUser;
  constructor(private router: Router, private fireDBService:FirebaseDBService,
   private navCtrl:NavController) { }

  ngOnInit() {
  }


  private getNewpassword():void
  {
      

    //check if email is valid
        this.fireDBService.sendforgetPasswordEmail(this.user.email).then(()=>{

        }).catch((err)=>{
          //print toast message
            console.log(err);

        });
   
  }

  goToLogin():void{
    //this.router.navigateByUrl('home');

    this.navCtrl.navigateRoot('home');
  }
}
