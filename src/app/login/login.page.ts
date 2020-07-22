import { Component, OnInit } from '@angular/core';
import { FirebaseDBService } from '../services/firebase-db.service';
import { UtilityService } from 'src/app/services/utility.service';
import { Router} from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,private fireDBService:FirebaseDBService,
    private utilityServ:UtilityService,private navCtrl:NavController) { }

    private email:string;// Stores user email from login input field
    private password:string;//stores user's password from login screen
    private toast;

  ngOnInit() {
  }

  /**
  * Method that send users to the the registration page.
  * Called in the home.html page
  */
 private goToSignUp():void {
  this.router.navigateByUrl('register');
}


/**
 * Call method from firebase DB service class to authenticate user credentials
 */
private loginUser():void{
  this.fireDBService.authenticateUser(this.email,this.password).then(()=>{
    //print successful toast message

   this.utilityServ.presentToast('Login was successful.');
   this.navCtrl.navigateRoot('tabs-page');
    
  }).catch((err)=>{

    this.utilityServ.presentToast('Please check your email and password.');
  })
}


private goToForgetPassword():void{

  console.log("clicked")
  this.router.navigateByUrl('forget-password');
}

}
