import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GearToggleService {

  _isOpen = false;
  isOpen = new BehaviorSubject(this._isOpen);
}
