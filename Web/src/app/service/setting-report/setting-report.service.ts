import { Injectable } from '@angular/core';
import { InputItem } from '../../items/input-item';
import { database } from 'firebase';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class SettingReportService {

  public inputs:InputItem[];
  private item:FirebaseObjectObservable<any>;
  
  
  constructor(
    private af:AngularFire,
    ) {
      this.item = af.database.object('/report_fields');
    
    this.inputs = [];
    this.item = af.database.object('/report_fields', { preserveSnapshot: true });
    this.item.subscribe(snapshot => {
      console.log(snapshot.key);
      console.log(snapshot.val());
      this.inputs = snapshot.val().report_fields;
      if(this.inputs == null)
        this.inputs = [];
    });
   // this.getInputs();
    
  };

  public addInputItem(id:string, type:string, label:string, placeHolder:string){
    console.log(this.getInputs());
    this.getInputs();
    var obj = new InputItem(id, type, label, placeHolder);
    this.inputs.push(obj);
    this.item.set({'report_fields' : this.inputs});
    //firebase.database().ref('report-fields').set(this.inputs);
    //this.inputs.push(new InputItem(id, type, lable, placeHolder));
    //need to save in data base
  };

  public getInputs(){
    /*this.inputs = [];
    this.firebaseService.getReportFields();
    console.log(this.inputs);
    return this.inputs;*/
    return this.inputs;
  };


}
