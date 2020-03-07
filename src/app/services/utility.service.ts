import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class UtilityService {


  private toast;

  constructor(public toastController: ToastController) { }





   /**
   * Method that creates toast messages
   * @param message 
   */
  public createToast(msg:string):void
  {
      this.toast = this.toastController.create({
          header: 'Toast header',
          message: msg,
          position: 'top',
          buttons: [
            {
              side: 'start',
              icon: 'star',
              text: 'Favorite',
              handler: () => {
                console.log('Favorite clicked');
              }
            }, {
              text: 'Done',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
        })
        this.toast.present();
  
  }

}
