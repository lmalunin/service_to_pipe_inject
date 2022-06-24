import { HttpClient, HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ICustomInterface } from './interfaces/custom.interface';
import { CustomPipeModule } from './pipes/custom-pipe.module';
import { CustomSevice } from './services/custom.service';
import { Custom2Sevice } from './services/custom2.service';

interface IServiceWithFactory{
  service: unknown,
  factory: (httpClient: HttpClient) => unknown
}

function createProviders(serviceWithFactory: IServiceWithFactory) {
  return {
    provide: serviceWithFactory.service,
    useFactory: serviceWithFactory.factory,
    deps: [HttpClient]
  };
}

let data: IServiceWithFactory[] = [
  {service: ICustomInterface, factory: (httpClient) => new CustomSevice(httpClient)},
  //{service: ICustomInterface, factory: (httpClient) => new Custom2Sevice(httpClient)},
];

let providers: Provider[] = data.map(value => createProviders(value));

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CustomPipeModule.forChild(providers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
