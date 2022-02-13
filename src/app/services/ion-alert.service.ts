import { Injectable } from '@angular/core';
import { AlertController, AlertOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class IonAlertService {

  constructor(private alertCtrl: AlertController) { }

  public async showAlert(opts: AlertOptions, onDismiss: () => void = null): Promise<HTMLIonAlertElement | null> {
    if (await this.alertCtrl.getTop()) return null;
    const alert = await this.alertCtrl.create(opts);
    if (onDismiss) {
      alert.onDidDismiss().then(() => onDismiss());
    }
    alert.present();
    return alert;
  }

  public dismissAlert(alert: HTMLIonAlertElement) {
    alert.dismiss();
  }
}
