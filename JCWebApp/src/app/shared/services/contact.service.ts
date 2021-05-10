import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Contact } from '@shared/entities';

@Injectable({ providedIn: 'root' })
export class ContactService {
    apiUrl = 'http://localhost:3000';
    private readonly apiEndpoint = this.apiUrl + '';

    constructor(private _http: HttpClient) {
    }

    sendMail(model: any): Observable<Contact> {
        const newContact: Contact = this._getEntityFromForm(model);

        return this._http
            .post<Contact>(this.apiEndpoint + '/sendMail', newContact)
            .pipe(catchError(this.handleError));
    }

    getMail(model: any): Observable<Contact> {
        const newContact: Contact = this._getEntityFromForm(model);

        return this._http
            .post<Contact>(this.apiEndpoint + '/getMail', newContact)
            .pipe(catchError(this.handleError));
    }

    handleError(handleError: any): import('rxjs').OperatorFunction<Contact, any> {
        throw new Error('Method not implemented.');
    }

    private _getEntityFromForm(modelForm: any): Contact {
        const contact: Contact = {
            surname: modelForm.surname,
            name: modelForm.name,
            email: modelForm.email,
            comment: modelForm.comment,
        };

        return contact;
    }
}
