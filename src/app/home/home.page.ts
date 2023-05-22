import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  salir(){
    localStorage.removeItem('ingresado');
    //localStorage.removeItem('usuario');
    this.navCtrl.navigateRoot('/login');
  }
}
