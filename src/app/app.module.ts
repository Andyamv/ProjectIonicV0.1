import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ComparteExperienciaPage } from '../pages/comparte-experiencia/comparte-experiencia';
import { AyudasLegalesPage } from '../pages/ayudas-legales/ayudas-legales';
import { LocalizacionPage } from '../pages/localizacion/localizacion';
import { ContactenosPage } from '../pages/contactenos/contactenos';
import { CreacionUsuarioPage } from '../pages/creacion-usuario/creacion-usuario';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ComparteExperienciaPage,
    AyudasLegalesPage,
    LocalizacionPage,
    ContactenosPage,
    CreacionUsuarioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ComparteExperienciaPage,
    AyudasLegalesPage,
    LocalizacionPage,
    ContactenosPage,
    CreacionUsuarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
