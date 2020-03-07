import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { FirebaseDBService } from '../../services/firebase-db.service';
import { IUser } from '../../Interfaces/IUser';
import { UtilityService } from 'src/app/services/utility.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private email:string;// Stores user email from login input field
  private password:string;//stores user's password from login screen
   private toast;



  constructor(private router: Router,private fireDBService:FirebaseDBService,
    private utilityServ:UtilityService) {}


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
      
    }).catch((err)=>{
 
      this.utilityServ.presentToast('Please check your email and password.');
    })
  }



  private goToForgetPassword():void{

    console.log("clicked")
    this.router.navigateByUrl('forget-password');
  }



}
