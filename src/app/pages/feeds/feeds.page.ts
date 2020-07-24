import { Component, OnInit, ViewChild } from '@angular/core';

declare var google;
@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.page.html',
  styleUrls: ['./feeds.page.scss'],
})
export class FeedsPage implements OnInit {

  @ViewChild("map",{ static: false }) mapElement;


  map: any;

  latitude = 18.1096;
  longitude=-77.2975;

  private segmentModel = 'featured';
  constructor() { }

  ngOnInit() {

    
  }

  ngAfterContentInit():void{

    (async () => { 


      await this.delay(5000);

      this.initMap();

  })();


  }

  public segmentChanged(event)
  {

  }



  public  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

    /**
   * Method that initialize map and display it in the div tag by @ViewChild 
   */
  initMap() {
    // new google.maps.LatLng(this.latitude,this.longitude);
 
   let latlng =new google.maps.LatLng(this.latitude,this.longitude);
     //MAP OPTIONS
     let mapOptions={
       center:latlng,
       zoom:15,
       mapTypeId: google.maps.MapTypeId.ROADMAP,
       disableDefaultUI: true
     };
 
  
     this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions);//CREATE MAP WITH PRESET OPTIONS
 
       //CREATE MAP MARKER
       let marker = new google.maps.Marker({
         position: latlng,
         map: this.map,
         label:"You"
       }); 
 
   
 
  
   }//END OIF INTIALIZE MAP METHOD



   public hideMap():void{

    console.log("click")
    document.getElementById('hiddenMap').style.visibility="hidden";
   }

   public showMap():void{
    console.log("click")
    document.getElementById('hiddenMap').style.visibility="visible";
   }
}
