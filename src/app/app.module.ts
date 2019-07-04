import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { EntryListComponent, EntryComponent, EntryService } from './entries';
import { InMemoryEntryService } from './backend';

@NgModule({
	// Módulos Adicionales
	imports: [
		BrowserModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryEntryService)
	],
	// Servicios
	providers: [ EntryService ],
	// Componentes
	declarations: [
		AppComponent,
		EntryComponent,
		EntryListComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
	
}