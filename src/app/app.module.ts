import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryCache} from '@apollo/client/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpLink} from 'apollo-angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PastLaunchesTableComponent } from './Components/past-launches-table/past-launches-table.component';
import { MainMenuComponent } from './Components/main-menu/main-menu.component';
import { RoadsterInfoComponent } from './Components/roadster-info/roadster-info.component';
import { MaterialModule } from './MaterialModule'; 
@NgModule({
  declarations: [
    AppComponent,
    PastLaunchesTableComponent,
    MainMenuComponent,
    RoadsterInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApolloModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://api.spacex.land/graphql/',
          }),
        };
      },
      deps: [HttpLink],
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
