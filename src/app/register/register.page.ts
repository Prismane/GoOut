import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FirebaseDBService} from '../services/firebase-db.service';
import { IUser } from '../Interfaces/IUser';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

   private mainDBNodeRef = "GoOutDB";
   private userNodeRef = "userProfile";
   private user = {} as IUser;//create user of type IUser, which is an interface.

  constructor(private router: Router, private fireDBService:FirebaseDBService,private afAuth:AngularFireAuth) {}

  /**
   * Navigate user to the login page
   */
  private goToLogin():void {
    this.router.navigateByUrl('home');
  }

  ngOnInit() {
  }

  /**
   * calls the create user method from the firebaseDB service
   * 
   */
  private registerUser():void{
    this.fireDBService.createNewUser(this.user.email,this.user.password).then(()=>{
    this.afAuth.authState.subscribe((auth) =>{ 
      console.log("user created successful!");
      this.user.uid = auth.uid;//Get user ID from firebase
      console.log("uid saved ");
      //Store user information to the database after specifying the node references.
      this.fireDBService.addNewDataToDB(`${this.mainDBNodeRef}/${this.userNodeRef}/${this.user.uid}`,this.user).then(()=>{
        console.log("user data stored");
        this.router.navigateByUrl('home');

        console.log("registration successful!");

      }).catch((err)=>{

        //display error message in toast.
        console.log(err)
      })

    })

    })


  }



}
