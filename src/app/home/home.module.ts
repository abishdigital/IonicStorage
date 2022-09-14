import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import {Storage} from '@ionic/Storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {

  constructor(){
  }

  storage: Storage;
  data:any;
  getStoredKeys:any;


// set a key/value
setValue(key: string, value: any) {
  this.storage.set(key, value).then((res) => {
      console.log('set' + key + ' ', res);

      // fetch key-value stored in key
      this.getKeyValue(key);

  }).catch((error) => {
      console.log('Error ' + key + ' ', error);
  });
}

    // fetch a key/value
    getKeyValue(key: string) {
      this.storage.get(key).then((res) => {
        this.data[key] = "";
        this.data[key] = res;
      }).catch((err) => {
        console.log('Error ' + key + '', err);
      });
    }

      // Remove key/value
  deleteKey(key: string) {
    this.storage.remove(key).then(() => {
      alert('Deleted ' + key);
      this.data[key] = "";
    }).catch((err) => {
      alert(err);
    });
  }

    // Get all stored key/value
    allStoredKeys() {
      this.storage.keys().then((res) => {
        this.getStoredKeys = res;
      });
    }

}

