import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { Contact } from '@shared/entities';
import { ContactService } from '@shared/services/contact.service';

@Component({
  selector: 'jc-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    contact: Contact = null;
    errorMessage: string = null;
    saving = false;
    form: FormGroup;

  constructor(
    private _contactService: ContactService,
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ContactComponent>) { }

  ngOnInit() {

    this.form = this._formBuilder.group({
      surname: [this.contact ? this.contact.surname : null, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      name: [this.contact ? this.contact.name : null, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      email: [this.contact ? this.contact.email : null, [Validators.required, Validators.email]],
      comment: [this.contact ? this.contact.comment : null, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
  });
  }

  save(formModel: any, isValid: boolean): void {
    if (isValid) {
        this.saving = true;
        this.errorMessage = null;

        const saveMethod$ =
            this._contactService.sendMail(formModel);
            this._contactService.getMail(formModel);

        saveMethod$.subscribe(
          contact => {
                this.dialogRef.close(contact);
            },
            error => {
                this.errorMessage = getValidationErrorMessageFromResponse(error);
                this.saving = false;
            }
        );
    }
}

}
function getValidationErrorMessageFromResponse(error: any): string {
  throw new Error('Function not implemented.');
}

