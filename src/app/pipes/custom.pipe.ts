import { HttpClient } from '@angular/common/http';
import { Inject, Pipe, PipeTransform } from '@angular/core';
import { ICustomInterface } from '../interfaces/custom.interface';
import { CustomSevice } from '../services/custom.service';
import { Custom2Sevice } from '../services/custom2.service';

@Pipe({
  name: 'customPipe',
})
export class CustomPipe implements PipeTransform{

  constructor(_c1: ICustomInterface, private _httpClient: HttpClient) {
    _c1.foo();

    console.log(this._httpClient);
  }


  transform(value: any, ...args: any[]): any {
    return value.toString().replace(".", ",");
  }
}
