import { Injectable } from '@angular/core';
import { InputItem } from '../../models/input-item';
import { database } from 'firebase';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class SettingReportService {

  public inputs: InputItem[];
  private item: FirebaseObjectObservable<any>;
  private itemToSave: FirebaseListObservable<any>;


  constructor(
    private af: AngularFire
  ) {
    //console.log(firebase.auth().currentUser.uid);
    this.item = af.database.object('/report_fields');
    this.itemToSave = af.database.list('/users/' + firebase.auth().currentUser.uid + '/reports');

    this.inputs = [];
    this.item = af.database.object('/report_fields', { preserveSnapshot: true });

    this.item.subscribe(snapshot => {

      if (snapshot.val()) {
        this.inputs = snapshot.val().report_fields;
        if (this.inputs == null)
          this.inputs = [];
      }
      else
        this.inputs.unshift(new InputItem('summary', 'text', 'תמצית של האירוע', 'תמצית של האירוע'));
      //    this.inputs.unshift(new InputItem('location_name', 'select', "שם המיקום", "שם המיקום", ['בחר מיקום', 'פסגת זאב']));
    });

  };

  public addInputItem(id: string, type: string, label: string, placeHolder: string) {
    //this.getInputs();
    var obj = new InputItem(id, type, label, placeHolder);
    this.inputs.push(obj);
    console.log(this.inputs);
    this.item.set({ 'report_fields': this.inputs });
  };

  public getInputs() {
    return this.inputs;
  };

  public save(obj) {
    this.itemToSave.push(obj);
    console.log('push');
  }


}
