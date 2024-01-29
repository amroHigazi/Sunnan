import { Injectable } from '@angular/core';
import { AnyARecord } from 'dns';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private idSource = new BehaviorSubject<string>('default-id');
  currentId = this.idSource.asObservable();

  changeId(id: string) {
    this.idSource.next(id);
  }
}
