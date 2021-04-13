import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { LoadingService } from '@shared/services';
import { Observable, of } from 'rxjs';

@Injectable()
export class HomepageResolver implements Resolve<any> {

  constructor(private _loadingService: LoadingService) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Observable<any>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this._loadingService.stop();
        resolve(of());
      }, 5000);
    });
  }

}
