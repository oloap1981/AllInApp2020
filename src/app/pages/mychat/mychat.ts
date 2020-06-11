import { HttpClient } from '@angular/common/http';
// import { HttpService } from './../../services/shared/http.service';

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'page-mychat',
  templateUrl: 'mychat.html'
})
export class MyChatPage  {

  licenseKey = 'Z8AZN-TX6NP-3KETR-LDF4L-SF1LP'; // Replace the value with your CometChat License Key;
  apiKey = '16d09e11cf125fa84d7450ed3e114642'; // Replace the value with your CometChat Api Key;
  name = 'ugo';
  password = '1234';
  host = 'http://testchat.mesys.it';
  localhost = 'http://localhost:8100';
  iflocal = true;
  userId = -1;

  constructor(private http: HttpClient,
              private navCtrl: NavController) {
      if (this.iflocal) {
        this.host = this.localhost;
      }
      this.login(this.name, this.password);
      this.getFriendList();
  }

  back() {
    this.navCtrl.pop();
  }

  initializeChat() {

  }

  login(name, password) {
    const ind = this.host + '/cometchat/api/index.php?action=authenticateUser&api-key=' + this.apiKey +
              '&username=' + name + '&password=' + password;
    this.http.get(ind).subscribe(
      (res) => {
        console.log(res);
        alert('success' + JSON.stringify(res));
        // this.userId = res.success.userid;
      }
    );

  }

  getFriendList() {
    const ind = this.host + '/cometchat/api/index.php?action=getfriend&api-key=' + this.apiKey +
      '&userid=' + this.userId;
    console.log(ind);
    this.http.get(ind).subscribe(
      res => {
        console.log(res);
        alert('success' + JSON.stringify(res));
      }
    );
  }

  launchChat() {

  }



}
