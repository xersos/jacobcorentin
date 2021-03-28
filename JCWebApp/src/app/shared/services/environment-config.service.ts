import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '@env/environment';

export interface EnvironmentConfig {
    isProd: boolean;
}

@Injectable({ providedIn: 'root' })
export class EnvironmentConfigService {
    config: EnvironmentConfig;

    constructor(private _http: HttpClient) { }

    load(): Observable<EnvironmentConfig> {
        return this._http.get<EnvironmentConfig>(`${environment.baseUrl}/assets/config/environment-config.json`)
            .pipe(tap(config => this.config = config));
    }
}