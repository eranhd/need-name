import { Injectable } from '@angular/core';
import { InputItem } from '../../items/input-item';
import { database } from 'firebase';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable()
export class SettingReportService {

  public inputs:InputItem[];
  constructor(private firebaseService:FirebaseService) {
    this.inputs = [];
    this.getInputs();
    
  };

  public addInputItem(id:string, type:string, label:string, placeHolder:string){
    this.getInputs();
    var obj = new InputItem(id, type, label, placeHolder);
    this.inputs.push(obj);
    firebase.database().ref('report-fields').set(this.inputs);
    //this.inputs.push(new InputItem(id, type, lable, placeHolder));
    //need to save in data base
  };

  public getInputs(){
    this.inputs = [];
    this.firebaseService.getReportFields();
    console.log(this.inputs);
    return this.inputs;
  };


}
