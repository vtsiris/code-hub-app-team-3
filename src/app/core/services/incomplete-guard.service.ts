import { Injectable } from '@angular/core';
import { BaseComponent } from '../models/base-component';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IncompleteGuardService implements CanDeactivate<BaseComponent>{

  constructor() { }

  canDeactivate(component: BaseComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot) {

    if (!component.canDeactivate()) {
      return window.confirm('Are you sure you want leave the page? The data you entered are unsaved!');
    }
    return true;

  }
}
