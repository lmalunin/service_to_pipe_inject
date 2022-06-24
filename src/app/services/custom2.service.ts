import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ICustomInterface } from '../interfaces/custom.interface';

@Injectable()
export class Custom2Sevice implements ICustomInterface{

  constructor(private httpClient: HttpClient) {
      console.log(httpClient);
  }

  foo(): void{
    console.log(456);
    this.httpClient.get('https://222.ru').subscribe();
  }
}
