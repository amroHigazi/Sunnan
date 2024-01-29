import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private isLoading = new BehaviorSubject<boolean>(false);
  private totalRequests = new BehaviorSubject<number>(0);
  
  public incressCounter(){
    this.totalRequests.next(this.totalRequests.value +1)
  }
  public DecressCounter(){
    this.totalRequests.next(this.totalRequests.value -1)
  }
  public get getCounter(): number{
    return this.totalRequests.value;
  }
  public setLoading(laodin:boolean){
    this.isLoading.next(laodin)
  }
  public get getIsLoading(): boolean{
    return this.isLoading.value;
  }


}
