import { Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})

export class PaymentPage implements OnInit {



  public paypal = '../../../assets/PayPal4.png';
  
  constructor(private payPal: PayPal, private alertController: AlertController) { }

  ngOnInit() {
  }




  public payPalCheckout():void{

    this.payPal.init({
      PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
      PayPalEnvironmentSandbox: 'Adh51Y8S9NydPa3uIsIgmBBXlepYs8OeedvOASfQ76s2lH8SwTolCqZHMJD5ezyuk4wyPLpvQrXrBdlO'// MY PAypal Developer ID for testing
    }).then(() => {

      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({

      })).then(() => {
        let payment = new PayPalPayment('150.00', 'USD', 'Party Ticket', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then(() => {
          // Successfully paid
    
          this.paymentAlert('Successfully paid')

        }, () => {
          // Error or render dialog closed without being successful
          this.paymentAlert('Error or render dialog closed without being successful');
        });
      }, () => {
        // Error in configuration
        this.paymentAlert('Error in configuration');
      });
    }, () => {
      // Error in initialization, maybe PayPal isn't supported or something else
      this.paymentAlert('Error in initialization, maybe PayPal is not supported or something else');
    });
  }




  async paymentAlert(message:string) 
  {
    const alert = await this.alertController.create({
      header: 'message',
      message: ''+message ,
      buttons: [
        {
          text: 'Ok',
        }
      
      ]
    });

    await alert.present();
  }

}
