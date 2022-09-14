import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data: any;
  getStoredKeys: any;
  constructor(
    private storage: Storage
  ) {
    this.data = {};
    //Set String Value
    this.setValue("name", "Remotestack");
    //Set Integer Value
    this.setValue("phone", 5555599999);
    let userObj = [
      {
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
      },
      {
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
      }
    ];
    // Set object val
    this.setValue("users", userObj);
  }
  ngOnInit(): void {
    this.allStoredKeys();
  }

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
