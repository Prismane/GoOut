import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { FirebaseDBService } from '../services/firebase-db.service';
import { IUser } from '../Interfaces/IUser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private user = {} as IUser;

  constructor(private router: Router,private fireDBService:FirebaseDBService) {}

  goToSignUp() {
    this.router.navigateByUrl('register');
  }


/**
 * Call method from firebase DB service class to authenticate user credentials
 */
  private loginUser():void{
    this.fireDBService.authenticateUser(this.user.email,this.user.password).then(()=>{
      //print successful toast message
      console.log("Login successful")

      
    }).catch((err)=>{
      console.log(err);
    })
  }

}
