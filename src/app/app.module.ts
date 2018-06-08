import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//componente del proyecto 
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistroComponent } from './components/registro/registro.component';

import {HttpClientModule} from '@angular/common/http';
import { PaisesComponent } from './components/paises/paises.component';
import { PaisesService } from './paises.service';
import { PostComponent } from './components/post/post.component';
import { PostService } from './post.service';
import { AlbumsComponent } from './components/albums/albums.component';
import {AlbumsService} from './albums.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistroComponent,
    PaisesComponent,
    PostComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AlbumsService],

  bootstrap: [AppComponent]
})
export class AppModule { }
