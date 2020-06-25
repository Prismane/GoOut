import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { IPost } from '../Interfaces/ipost';
import { IUser } from '../Interfaces/IUser';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDBService {

  private mainDBNodeRef = "GoOutDB";
  private userNodeRef = "userProfile";
  private userData = {} as IUser;//STORES CURRENT USER DATA

  constructor(private afAuth:AngularFireAuth,private afDatabase: AngularFireDatabase) { 

    this.GetCurrentUserData();//THIS METHOD IS CALLED TO GET CURRENT USER DATA SO THAT THE UID CAN BE USED TO PERFORM MOREMOPEREATIONS
  }


/**
 * THIS METHOD WILL FIRST GET THE USER ID FROM THE CURRENT AUTHENTICATION STATE
 * THEN GET THE USER CURRENT DATA FROM THE DATABASE
\ * THEN STORES USER DATA IN LOCALSTORAGE SINCE IT IS ONLY ACCESSIBLE IN THE `authstate.subscribe` SCOPE
 * THEN RETURN THE USER DATA
 */
  public GetCurrentUserData(): IUser {

    this.afAuth.authState.subscribe(auth=>{


      this.afDatabase.object(`${this.mainDBNodeRef}/${this.userNodeRef}/${auth.uid}`).snapshotChanges().subscribe(data=>{
        this.userData = data.payload.val() as IUser;

      localStorage.setItem('user',JSON.stringify(this.userData))
    })

    })
    
    
this.userData = JSON.parse(localStorage.getItem('user'));

    console.log(this.userData);
      return this.userData;
  }


  /**
   * 
   * @param email 
   * @param password 
   * 
   * Method that creates new user and return promise of the user's credential,
   * so we can use the "Then" key later on.
   */
  public createNewUser(email:string,password:string):Promise<firebase.auth.UserCredential>{
      return this.afAuth.auth.createUserWithEmailAndPassword(email,password);
  }

  /**
   * 
   * @param path 
   * @param object 
   */
  public addNewDataToDB(path:string,object:any):Promise<void>{
    return this.afDatabase.object(`${path}`).set(object);
  }



  /**
   * 
   * @param email 
   * @param password 
   * 
   * Method that accepts email and password to check if the user data is in the database 
   * if it is then this data will return to be used later on
   */
  public authenticateUser(email,password):Promise<firebase.auth.UserCredential>{
    return this.afAuth.auth.signInWithEmailAndPassword(email,password);
  }


  /**
   * 
   */
   public sendforgetPasswordEmail(email):Promise<void>{
     return this.afAuth.auth.sendPasswordResetEmail(email);
   }




   /**
    * ALL POST CRUD METHODS for the current user
    */

    public createNewPost(post:IPost){

      return this.afDatabase.list(`${this.mainDBNodeRef}/${this.userNodeRef}/${this.userData.uid}/post`).push(post);

    }

    //GET POST reference 
    public readAllPost(){
      return this.afDatabase.list(`${this.mainDBNodeRef}/${this.userNodeRef}/${this.userData.uid}/post`);
    }



    /**
    * ALL NOTIFICATION CRUD METHODS for the current user
    */

   public createNewNotification(post:IPost){

    return this.afDatabase.list(`${this.mainDBNodeRef}/${this.userNodeRef}/${this.userData.uid}/notification`).push(post);

  }

  //GET NOTIFICATION reference 
  public readAllNotification(){
    return this.afDatabase.list(`${this.mainDBNodeRef}/${this.userNodeRef}/${this.userData.uid}/notification`);
  }



    /**
    * ALL commentsCRUD METHODS for the current user
    */

   public createNewComments(post:IPost){

    return this.afDatabase.list(`${this.mainDBNodeRef}/${this.userNodeRef}/${this.userData.uid}/comments`).push(post);

  }

  //GET comments reference 
  public readAllComments(){
    return this.afDatabase.list(`${this.mainDBNodeRef}/${this.userNodeRef}/${this.userData.uid}/comments`);
  }

}
