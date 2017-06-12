import { Injectable } from '@angular/core';
import { InputItem } from '../../models/input-item';
import { database } from 'firebase';
import { AngularFireDatabase ,FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import {UserService} from '../user/user.service';
@Injectable()
export class SettingReportService {

  public inputsParentPatrol: InputItem[];
  public inputsDtPatrol: InputItem[];
  private item: FirebaseObjectObservable<any>;
  private itemToSave: FirebaseListObservable<any>;


  constructor(
    private af: AngularFireDatabase,
    public userService:UserService
  ) {
      if(firebase.auth().currentUser.uid != null){
          this.itemToSave = af.list('/users/' + firebase.auth().currentUser.uid + '/reports');
      }

      if(this.userService.user.details.role.name == 'parentPatrol'){

        this.inputsParentPatrol = [];
        this.item = af.object('/report_fields', { preserveSnapshot: true });

        this.item.subscribe(snapshot => {

        if (snapshot.val()) {
        this.inputsParentPatrol = snapshot.val().parentPatrol_report_fields;
        if (this.inputsParentPatrol == null)
          this.inputsParentPatrol = [];
        }
        else
          this.inputsParentPatrol.unshift(new InputItem('summary', 'text', 'תמצית של האירוע', 'תמצית של האירוע'));
        });
     }

     else{

        this.inputsDtPatrol = [];
        this.item = af.object('/report_fields', { preserveSnapshot: true });

        this.item.subscribe(snapshot => {

        if (snapshot.val()) {
        this.inputsDtPatrol = snapshot.val().DtPatrol_report_fields;
        console.log(this.inputsDtPatrol);
        if (this.inputsDtPatrol == null)
          this.inputsDtPatrol = [];
        }
        else
          this.inputsDtPatrol.unshift(new InputItem('summary', 'text', 'תמצית של האירוע', 'תמצית של האירוע'));
        });

   
     }

  };

  public addInputItem(id: string, type: string, label: string, placeHolder: string) {
      var obj = new InputItem(id, type, label, placeHolder);
    
   if(this.userService.user.details.role.name == 'parentPatrol'){

      this.inputsParentPatrol.push(obj);
      this.item.update({ 'parentPatrol_report_fields': this.inputsParentPatrol});
     }
     else{
       this.inputsDtPatrol.push(obj);
       this.item.update({ 'DtPatrol_report_fields': this.inputsDtPatrol });
     }
  };

  public getInputs() {
     if(this.userService.user.details.role.name == 'parentPatrol'){
        return this.inputsParentPatrol;
     }
     else{
       return this.inputsDtPatrol;
     }
  };

  public deleteField(placeHolderId:string){
    if(placeHolderId== ''){
      return;
    }
    else{
      if(this.userService.user.details.role.name == 'parentPatrol'){
        let size= this.inputsParentPatrol.length;
        for(let i=0;i<size;i++){
        if(this.inputsParentPatrol[i].placeHolder == placeHolderId){
        this.inputsParentPatrol.splice(i,1);
        this.item.update({ 'parentPatrol_report_fields': this.inputsParentPatrol });
        break;
       }
     }
      }
    else{
        let size= this.inputsDtPatrol.length;
        for(let i=0;i<size;i++){
        if(this.inputsDtPatrol[i].placeHolder == placeHolderId){
        this.inputsDtPatrol.splice(i,1);
        this.item.update({ 'DtPatrol_report_fields': this.inputsDtPatrol });
        break;
       }
     }
    }
    }
  }


  public save(obj) {
    this.itemToSave.push(obj);
    console.log('push');
  }


}
