import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidenavModule } from './components/sidenav/sidenav.module';

@NgModule({
	declarations: [AppComponent, HeaderComponent], // let/const : Component, Directive, Pipe - после создания сущности, ее необходимо задекларировать в модуле
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		SidenavModule,
	], //import... Сюда помещаются все импорты, например модули
	providers: [], // подключение сервисов
	bootstrap: [AppComponent], // компонент для старта приложения
})
export class AppModule {}
