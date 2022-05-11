import { AppRotuingModule } from './App-routing-module';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './components/nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import localPt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localPt, 'pt');
@NgModule({
  declarations: [AppComponent, NovaTransferenciaComponent, ExtratoComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRotuingModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
