import { Injectable } from '@angular/core'
import { OneSignal } from '@ionic-native/onesignal';
import { Platform } from 'ionic-angular'


@Injectable()
export class PushnotificationProvider {

  constructor(private oneSignal:OneSignal,
            public platform:Platform) {
  }

  init_notification(){
    if(this.platform.is('cordova')){
      this.oneSignal.startInit('0b3d3587-a098-49d0-a790-cc1d51fe3b91', 
      '615096774621');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
        console.log('Notificación resivida')
      // do something when notification is received
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        console.log('Notificación Abierta')
        // do something when a notification is opened
      });

      this.oneSignal.endInit();
    }else{
      console.log('Este codigo no funciona en un navegador web')
    }
  }

}
