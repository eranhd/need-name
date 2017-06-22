import { Component, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'confirm-dialog',
  template: `<div style="width:50%; height:auto; border:1px solid #004381; box-shadow: 2px 2px 2px gray; text-align:center; background-color:white; position:fixed; top:25%; left:25%; z-index:99;">
                <h1>
                    {{confirmMessage}}
                </h1>
                <p style="text-align:center;">
                    {{body}}
                </p>
                <button style="text-align:center;" md-button (click)="dialogRef.close(false)" style="border: none; background-color:#004381; color:white;" >סגור</button>
            </div>`,
})
export class ConfirmationDialog {
  constructor(public dialogRef: MdDialogRef<ConfirmationDialog>) {}

  public confirmMessage:string;
  public body: string;
}