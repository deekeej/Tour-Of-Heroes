import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

//declarations pro komponenty - pres cli, se pridava samo
//imports pro moduly
//providers pro servisi
//bootstrap where program starts

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, MessagesComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
