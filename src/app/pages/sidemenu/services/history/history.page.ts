import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Service } from 'src/app/models/service';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/providers/api/api.service';
import { AuthService } from 'src/app/providers/auth/auth.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  $providedServices: Observable<Service[]>
  user: User

  constructor(
    private api: ApiService,
    private auth: AuthService,
    public actionSheetController: ActionSheetController
  ) {

  }

  ngOnInit() {
    this.user = this.auth.userData()
    this.$providedServices = this.api.getHistoryOfServices()
  }

  ionViewWillEnter() {
    this.user = this.auth.userData()
  }

  async presentActionSheetOrderBy() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Ordenar por',
      buttons: [
        {
          text: 'Nombre',
          icon: 'swap-vertical-outline',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Precio menor a mayor',
          icon: 'cash-outline',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Precio mayor a menor',
          icon: 'cash-outline',
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  async presentActionSheetPriceRange() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Ordenar por',
      buttons: [
        {
          text: '$0 - $10.000',
          icon: 'cash-outline',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: '$10.000 - $20.000',
          icon: 'cash-outline',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: '$20.000 - $30.000',
          icon: 'cash-outline',
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: '$30.000 - ++',
          icon: 'cash-outline',
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

}
