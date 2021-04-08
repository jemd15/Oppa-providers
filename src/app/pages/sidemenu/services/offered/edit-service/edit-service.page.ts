import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/providers/api/api.service';
import { LocationService } from 'src/app/providers/location/location.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.page.html',
  styleUrls: ['./edit-service.page.scss'],
})
export class EditServicePage implements OnInit {

  editServiceForm: FormGroup
  apiUrl: string = environment.HOST + '/'
  regions: any[] = []
  districts: string[] = []
  @Input() public service

  constructor(
    private modalController: ModalController,
    private location: LocationService,
    private formBuilder: FormBuilder,
    private api: ApiService,
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.editServiceForm = this.createEditServiceForm()
    this.location.getRegions().toPromise()
      .then((regions) => {
        this.regions = regions
        if (this.editServiceForm.value.region) this.getDistrictsByRegion()
      })
  }

  getDistrictsByRegion() {
    this.editServiceForm.controls.districts.reset()
    this.location.getDistrictsByRegion(this.regions.find(region => region.nombre === this.editServiceForm.value.region).codigo).toPromise()
      .then((districts: any) => {
        this.districts = districts
      })
  }

  createEditServiceForm() {
    let workable = []

    if (this.service.workable.search('l') !== -1) workable.push('l')
    if (this.service.workable.search('m') !== -1) workable.push('m')
    if (this.service.workable.search('x') !== -1) workable.push('x')
    if (this.service.workable.search('j') !== -1) workable.push('j')
    if (this.service.workable.search('v') !== -1) workable.push('v')
    if (this.service.workable.search('s') !== -1) workable.push('s')
    if (this.service.workable.search('d') !== -1) workable.push('d')

    return this.formBuilder.group({
      provider_has_services_id: [this.service.provider_has_services_id, Validators.required],
      gender: [this.service.gender, Validators.required],
      state: [this.service.state, Validators.required],
      providers_provider_id: [this.service.providers_provider_id, Validators.required],
      providers_users_user_id: [this.service.providers_users_user_id, Validators.required],
      services_categories_category_id: [this.service.services_categories_category_id, Validators.required],
      services_service_id: [this.service.services_service_id, Validators.required],
      workable: [workable, Validators.required],
      region: [this.service.locations[0].region, Validators.required],
      districts: [null],
      start: [this.service.start, Validators.required],
      end: [this.service.end, Validators.required]
    })
  }

  async closeModal(reload: boolean) {
    await this.modalController.dismiss({
      reload
    })
  }

  editService() {
    let days = ''
    this.editServiceForm.value.workable.forEach(day => {
      days += day
    });
    this.editServiceForm.value.workable = days
    console.log(this.editServiceForm.value);
    this.api.editOfferedService(this.editServiceForm.value).toPromise()
      .then((res: any) => {
        this.closeModal(true)
        this.presentToast('Servicio actualizado correctamente', 'success')
      })
      .catch(err => {
        this.presentToast('No se han podido actualizar los datos del servicio', 'danger')
      })
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color
    });
    toast.present();
  }

}
