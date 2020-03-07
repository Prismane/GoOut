import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDBService {

 

  constructor(private afAuth:AngularFireAuth,private afDatabase: AngularFireDatabase) { }



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

}
