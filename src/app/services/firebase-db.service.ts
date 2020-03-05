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

}
