// Módulo general de la apliación - Toda aplicación implementado con Angular debe tener al menos un módulo principal.
import { NgModule } from '@angular/core';
import { RouterModule ,Router, Routes, ActivatedRoute } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { EntryListComponent, EntryComponent, EntryService, EntryCommentFormComponent } from './entries';
import { InMemoryEntryService } from './backend';

const appRoutes: Routes = [
	{path: 'home/:id', component: EntryListComponent}
];


@NgModule({
	// Módulos Adicionales
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		RouterModule.forRoot(appRoutes),
		InMemoryWebApiModule.forRoot(InMemoryEntryService)
	],
	// Servicios
	providers: [ EntryService ],
	// Componentes
	declarations: [
		AppComponent,
		EntryComponent,
		EntryListComponent,
		EntryCommentFormComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {
	
}