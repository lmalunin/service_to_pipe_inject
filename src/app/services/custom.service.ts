import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomInterface } from '../interfaces/custom.interface';

@Injectable()
export class CustomSevice implements ICustomInterface{
  constructor(private httpClient: HttpClient) {

  }

  foo(): void{
    console.log(123);
    this.httpClient.get('https://111.ru').subscribe();
  }
}
