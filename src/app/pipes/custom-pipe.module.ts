import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CustomSevice } from '../services/custom.service';
import { CustomPipe } from './custom.pipe';



@NgModule({
  exports:      [
    CustomPipe
  ],
  declarations: [
    CustomPipe
  ]
})
export class CustomPipeModule{
  public static forChild(providers: any[]): ModuleWithProviders<CustomPipeModule> {

    return {
      ngModule: CustomPipeModule,
      providers,
    };
  }
}
